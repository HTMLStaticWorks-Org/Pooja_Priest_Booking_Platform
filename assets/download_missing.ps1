$ErrorActionPreference = "Continue"

$replacements = [ordered]@{
    "puja-thali.jpg"         = @(
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
    )
    "satyanarayan-pooja.jpg" = @(
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
    )
    "priest-1.jpg"           = @(
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    )
    "samagri-kit.jpg"        = @(
        "https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&w=800&q=80"
    )
    "about-temple.jpg"       = @(
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
    )
}

foreach ($key in $replacements.Keys) {
    $dest = "assets\images\" + $key
    $urls = $replacements[$key]
    $downloaded = $false
    foreach ($u in $urls) {
        Write-Host "Trying $key with $u ..."
        try {
            Invoke-WebRequest -Uri $u -OutFile $dest -UserAgent "Mozilla/5.0"
            $len = (Get-Item $dest).Length
            if ($len -gt 5000) {
                Write-Host "Success: $key ($len bytes)"
                $downloaded = $true
                break
            }
        } catch {
            Write-Host "Failed: $_"
        }
    }
}

