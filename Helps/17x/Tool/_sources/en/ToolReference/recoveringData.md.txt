# Recovering Data

There are various reasons why you may accidentally lose your work.
The editor might crash, a power outage may happen, or simply clicking
the wrong button may result in corruption of the effect you've been 
working on for hours. For these reasons, the Effekseer editor uses 
auto saves to increase the likelihood of successful recovery of lost 
projects.

Auto saves are performed at a fixed interval over time, as well as 
every time you close the editor. Auto saves are enabled by default, 
and you can't disable auto save on editor exit.

## Recovering Auto Saves

### Last Session

`
Menu: File > Recover > Last Session
`

Opens the `efk_quit.efkbac` file which is saved in Temporary directory when the editor 
is closed under normal operation. This option allows to recover project 
which was lost when you accidentally closed the editor and didn't save changes. 
If such a file is not found an error will be shown.


### Auto Save

`
Menu: File > Recover > Auto Save...
`

Allows you to choose an auto saved file from Temporary directory.
Auto saved files will have `efk_autosave` prefix and `efkbac` extension. 
These files are saved automatically with interval configured in options menu
(2 minutes by default). If auto save interval is set to 0 auto saves wont
be performed.

