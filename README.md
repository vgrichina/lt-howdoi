# LightTable howdoi plugin

[Howdoi](https://github.com/gleitz/howdoi) is an excellent command line tool that searches for answers on StackOverflow. This plugin abuses it to write code for you.

## Usage

For example when developing some script in Python you don't know how to make HTTP request (I never remember such details myself). So you instead of going to Google as usual you just write comment like this:


``` python
# make http request
```

When you finished writing comment just press `ctrl-h` and get code inserted automatically.

``` python
# make http request
import urllib2
urllib2.urlopen("http://example.com/foo/bar").read()
```

## Installation

First you need to install `howdoi` itself. Just execute `pip install howdoi` in console, or use [some other installation method](https://github.com/gleitz/howdoi#installation).

Then install this plugin from LightTable's Plugin Manager. To use `ctrl-h` or other keybinding to execute this plugin edit keybindings by pressing `ctrl-space` and selecting `Settings: User keymap`. Just add following binding there:

``` clojurescript
"ctrl-h" [:howdoi.ask]
```
