## Launch:

1. If you run it not on Windows, you should install [Git bash](https://gitforwindows.org/). You can see how integrate it with VSCode [here](https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal)
2. Check the current terminal is `bash`
3. Run `npm i` to install packages
4. Open `components.json` and add necessary widget
5. Run `npm run build:repos` for all bundles create. On Unix OS use `npm run build:repos:unix`

Check the `bundles` directory after script finish. There should be `NAME-basic.js` and `NAME-renovated.js` bundles in jquery directory and 3 bundles for each another approach: `NAME-native.js`, `NAME-wrapper.js` and `NAME-renovated-wrapper.js`.

Vue and Angular bundles are also copied to appropriate playground directory. React and jquery use bundles directly from `bundles` directory.

## Some bundle did not create successfully. How to find a problem?

First of all, open `webpack-stats.json` file in the appropriate subdir of `bundles` directory. Here you can see where error raised or which file necessary for bundle build is missed.

You can also see shell script log in `build_repos.log` file to fin concrete command which has been failed and reproduce it manually.

Please, note, that some command which ends with status `Error` can have no influence on result bundle. For example, `repo clone` command status can be error when there is already cloned repo in root directory. Or jquery can be built with error if there are some problems in themebuilder. But it's okay for bundle create.

## How to measure a performance

You can choose your own testcase set, but following are necessary:

1. init with minimum count of props
2. init with maximun count of props
3. minimum count of options change
4. maximum count of options change
5. widget methods performance

For performance measuring we use mutation count and time. See [this excel table](https://devexpress.sharepoint.com/:x:/r/sites/devextreme/_layouts/15/doc2.aspx?sourcedoc=%7B83b3ff2d-7c2b-4ecc-aa0f-98a7bf077c6e%7D&action=edit&activeCell=%27Pager%27!C3&wdrcid=2bb7cd88-846e-40dc-8e73-66428d6ae10e&wdrldc=1&cid=eedc6bd9-d61b-456b-b02a-ca67364bbd9a).

Check out the `playground` directory. There are prepared servers for each approch. Just run `npm run start:react` or another to start the server. On Unix OS use `npm run start:react:unix` etc. You should refactor imports and tests for your widget.

Do not pay attention to the time results at the first test run - they may be unreliable. Take the average value of the next few test runs. Put a percentage value in the table - how much longer is the test run time with the renovated widget compared to the old one. You can use [this online calculator](https://calcus.ru/kalkulyator-procentov) to simpify value computation.

Example:
React wrapper = 500ms
React native = 50ms = -90%
React renovated wrapper = 780ms = +56%

## Bundle sizes

Just check out the sizes of files in the `bundles` directory.

## Memory

Go to the `performance` tab in dev tools. Set `memory` checkbox to true and start recording. After it refresh the page, wait a second, stop recording and check used memory heap size in right top corner.

To check if there is memory leak remove and add widgets to the page several times and check memory graphic.
