# Critical rendering path (CRP)

## Notes

> The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen. - [1]

### Summary

* Document object model (DOM) + Css object model (CSSOM) = Render tree.
* Css blocks rendering.
* Scripts block rendering.
* Css blocks script execution.
* async scripts will not block rendering.
* Reduce the number of static files you load.

#### Scripts & Css block rendering

> DOM construction is incremental. The HTML response turns into tokens which turns into nodes which turn into the DOM Tree. - [1]

The browser is rendering out the web page for every complete node it finds. This means that we will see content in the order it is discovered.

> CSS is render blocking because rules can be overwritten, so the content can't be rendered until the CSSOM is complete. - [1]

The Css will block rendering and construct the CSSOM in one operation. This makes it important for us to:

* Place the Css link correctly.
* Load as little Css as possible.
* Use as few nework requests as possible.

#### Css blocks script execution

> The browser continues to parse the HTML making requests and building the DOM, until it gets to the end, at which point it constructs the CSS object model. - [1]

JavaScript can effect the CSSOM. The browser will try to optimize rendering by halting JavaScript execution until the CSSOM is constructed.
This means that you need to load your Css before your JavaScript if you want to be sure that your JavaScript will run as soon as it is loaded.

#### Async

The `async` attribute will execute the script without blocking. [2]

Use async on scripts that need to be in the header such as:

* Analytics scripts
* A/B test scripts

Put all other scripts at the bottom of the body as a rule.

## References

[1] https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path

[2] https://www.w3schools.com/tags/att_script_async.asp