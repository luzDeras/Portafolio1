$imagesDir = "src/assets/luz/images"
$files = Get-ChildItem -Path $imagesDir -Include "*.jpg","*.png" -Recurse

foreach ($file in $files) {
    $outputFile = [System.IO.Path]::ChangeExtension($file.FullName, "webp")
    Write-Host "Convirtiendo $($file.Name) a WebP..."
    
    # Usar ImageMagick si está instalado
    if (Get-Command magick -ErrorAction SilentlyContinue) {
        magick convert $file.FullName -quality 80 $outputFile
    } else {
        Write-Host "ImageMagick no está instalado. Por favor, instala ImageMagick para continuar."
        Write-Host "Puedes descargarlo desde: https://imagemagick.org/script/download.php"
        break
    }
} 