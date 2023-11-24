
# About exit intent

Its an activity of the user where they will leave the site using their cursor to another page or they stop scrolling through the website.

# About this code
When the user leaves their cursor from the viewport, the modal or container will show.


## Installation

Either put this code in embed element and below the popup container, or before </body> in page settings then put the necessary custom attribute in the element

```bash
  <script defer src='https://cdn.jsdelivr.net/gh/support-yoonet/exit-intent/exit-intent.js'></script>
```
    
## Documentation

|Custom Attribute|Value|Description|
|--|--|--|
|exit-popup|"exit-intent"|Input this in the container or parent of the exit intent|
|seconds|Enter the time|This is the cooldown after the popup will be displayed again|
|idle-time|Enter the time|This is the Timer of the popup before it will be displayed|





## Limitations
- Cooldown using the unit of time like Hours, days, or weeks



## Acknowledgements

 - [Exit Intent Popup Freebie](https://webflow.com/made-in-webflow/website/exit-intent-popup-freebie)
