This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) connected to the wordpress API running locally.

## Getting Started
First if you don't already have the ability to run a local wordpress server you can download a program such as MAMP or XAMPP.

After downloading one of those then install [Wordpress.org](https://wordpress.org/download/). For instructions to install wordpress, check out their documentation [here](https://wordpress.org/support/article/how-to-install-wordpress/)

After installing wordpress and setting up a user you can start accessing the API at `/wp-json/wp/v2`, make sure your server is up and running.

Now to run the development server in your Next.js application use the following command:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This application contains an optional catch all route [[...page]].js so this file is for all routes at `/${page slug}`, this catches the index route as well.
There is also a catch all route for [...post].js, they can be viewed at `/posts/${post slug}`.

## Requirements
For the application to run properly you will need the plugin [Advanced Custom Fields](https://www.advancedcustomfields.com/) installed and then import the json file, `acf-export-202x-xx-xx.json`, in the root folder of this repository to **Custom Fields -> Tools -> Import Field Groups** found in the wordpress menu.
This lets you dynamically render the blog feed from within wordpress under pages and posts.

