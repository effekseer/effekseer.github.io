# File - Import

## Effekseer package
Import the efkpkg file.

An efkpkg file is a package file that contains one or more efkefc files and various resource files.

After specifying the file to import, the import dialog is displayed.

```eval_rst
.. image:: ../../img/Reference/Import/import_efkpkg_en.png
   :align: center
```

You can do the following in this dialog:

- Changing the import destination directory
  - In the initial state, the directory of the currently open effect is specified.
- Choose whether to import in each file
  - If you uncheck the left side of the file name, the file will not be imported.
  - A warning icon will be displayed if the file already exists in the import destination.
- Rename each file to be imported
  - When you change the file name, the reference name in the file that refers to that file is also rewritten.

If there is no problem, press the "Import" button and the files in efkpkg will be extracted to the import destination.
