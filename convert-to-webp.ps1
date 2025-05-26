$imagesDir = "src/assets/luz/images"
$files = Get-ChildItem -Path $imagesDir -Filter "*.jpg","*.png"

foreach ($file in $files) {
    $outputFile = [System.IO.Path]::ChangeExtension($file.FullName, "webp")
    Write-Host "Convirtiendo $($file.Name) a WebP..."
    & cwebp -q 80 $file.FullName -o $outputFile
} 