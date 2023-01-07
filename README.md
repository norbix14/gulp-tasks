# Gulp Tasks

## Optimizations and transformations

* optimize **[png, jpg]** images (from **./src/public/img/** to **./dist/public/img/**)

```bash
gulp optimizeImages
```

* build **webp** images (transform **all** images into *.webp*)

```bash
gulp buildImagesWebp
```

* build **avif** images (transform **all** images into *.avif*)

```bash
gulp buildImagesAvif
```

* manually transform **scss** into **css** (from **./src/public/scss/app.scss** to **./dist/public/css/**)

```bash
gulp buildCss
```

* watch changes in **scss** files (same as *gulp* command below)

```bash
gulp dev
```

* transform **scss** into **css** (default task) and watch for changes

```bash
gulp
```
