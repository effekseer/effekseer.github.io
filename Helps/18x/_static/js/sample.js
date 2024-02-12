$(function () {

    var canvas = $('<canvas></canvas>');

    $('body').append(canvas)
    var scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, 4 / 3, 1, 1000);
    var target = new THREE.Vector3({ x: 0, y: 0, z: 0, });
    camera.position.set(20, 20, 20);
    camera.lookAt(target);
    controls = new THREE.OrbitControls(camera, canvas.get(0));
    var renderer = new THREE.WebGLRenderer({ canvas: canvas.get(0), preserveDrawingBuffer: true });
    renderer.setSize($(this).width(), $(this).width() * (3 / 4));

    var handle = null;
    var effect = null;

    effekseer.initRuntime('../_static/js/effekseer.wasm', () => {
        context = effekseer.createContext();

        context.init(renderer.context);
        effect = context.loadEffect(location.hash.substr(1));
        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, 0.7, 0.7);
        scene.add(directionalLight);
        var gridHelper = new THREE.GridHelper(20);
        scene.add(gridHelper);
        
        function effectLoop() {
            if (handle && handle.exists) {
            } else {
                handle = context.play(effect, 0, 0, 0);
            }
        }

        (function renderLoop() {
            requestAnimationFrame(renderLoop);

            if (effect.isLoaded) {
                effectLoop();
            }

            context.update();
            controls.update();

            renderer.render(scene, camera);
            context.setProjectionMatrix(camera.projectionMatrix.elements);
            context.setCameraMatrix(camera.matrixWorldInverse.elements);
            context.draw();
        })();
        
        window.addEventListener("dblclick", function(e) {
            if (handle && handle.exists) {
                handle.sendTrigger(0)
            }
        });
        $(window).resize(function () {
            renderer.setSize($(window).width(), $(window).width() * (3 / 4));
        })
        setTimeout(function () {
            renderer.setSize($(window).width(), $(window).width() * (3 / 4));
        }, 1000)
    });
})