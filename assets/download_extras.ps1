$ErrorActionPreference = "Continue"

$extras = [ordered]@{
    "pooja-altar.jpg"      = "https://images.unsplash.com/photo-1609137144822-225333f0d0e6?auto=format&fit=crop&w=800&q=80"
    "priest-vedic.jpg"     = "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?auto=format&fit=crop&w=800&q=80"
    "kalash-ceremony.jpg"  = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    "south-temple.jpg"     = "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=800&q=80"
}

foreach ($item in $extras.GetEnumerator()) {
    $dest = "assets\images\" + $item.Key
    try {
        Invoke-WebRequest -Uri $item.Value -OutFile $dest -UserAgent "Mozilla/5.0"
        Write-Host "Extra: $($item.Key) - OK"
    } catch {
        Write-Host "Extra failed: $($item.Key)"
    }
}

