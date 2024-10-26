## WordPress Block Editor Documentation.
https://developer.wordpress.org/block-editor/

### Block Editor Elements
The elements highlighted are:
1. Inserter: A panel for inserting blocks into the content canvas
2. Content canvas: The content editor, which holds content created with blocks
3. Settings Panel A panel for configuring a block’s settings when selected or the settings of the post

## Tool Requirements
if you are using gitpod this comes pre-installed with all the requirements.
1. Node 18+ and above
2. pnpm
3. WPCLI

## Creating a block template 
To create a block template use the command below
```shell
pnpx @wordpress/create-block@latest src/blocks/custom-button --variant=dynamic --no-plugin
```

## Block Sample Plugins
https://github.com/WordPress/block-development-examples/tree/trunk/plugins


