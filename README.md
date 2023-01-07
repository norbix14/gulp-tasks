# Gulp sandbox

## Gulp tasks

* optimize *png or jpg* images (from **./src/images_raw/** to **./src/img/**)

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

* manually transform *scss* into *css*

```bash
gulp buildCss
```

* watch changes in *scss* files (same as *gulp* command below)

```bash
gulp dev
```

* transform *scss* into *css* (default task) and watch for changes

```bash
gulp
```
