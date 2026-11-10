$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force -Path "assets\images" | Out-Null

$images = [ordered]@{
    "hero-temple.jpg"          = "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
    "puja-thali.jpg"           = "https://images.unsplash.com/photo-1609137144822-225333f0d0e6?auto=format&fit=crop&w=800&q=80"
    "festival-diya.jpg"        = "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&w=800&q=80"
    "ganapathi-homam.jpg"      = "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80"
    "griha-pravesham.jpg"      = "https://images.unsplash.com/photo-1615966650071-855b15f29ad1?auto=format&fit=crop&w=800&q=80"
    "satyanarayan-pooja.jpg"   = "https://images.unsplash.com/photo-1620608985160-569dfa688b17?auto=format&fit=crop&w=800&q=80"
    "naming-ceremony.jpg"      = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    "ayushya-homam.jpg"        = "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"
    "wedding-rituals.jpg"      = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
    "priest-1.jpg"             = "https://images.unsplash.com/photo-1545232979-fbf68fe9ec40?auto=format&fit=crop&w=800&q=80"
    "priest-2.jpg"             = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
    "priest-3.jpg"             = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    "samagri-kit.jpg"          = "https://images.unsplash.com/photo-1574043443894-1a4542afb0e1?auto=format&fit=crop&w=800&q=80"
    "ritual-hands.jpg"         = "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?auto=format&fit=crop&w=800&q=80"
    "testimonial-family1.jpg"  = "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&q=80"
    "testimonial-family2.jpg"  = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    "testimonial-family3.jpg"  = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    "about-temple.jpg"         = "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1000&q=80"
    "festival-celebration.jpg" = "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80"
    "brass-diya-close.jpg"     = "https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&w=800&q=80"
}

foreach ($item in $images.GetEnumerator()) {
    $dest = "assets\images\" + $item.Key
    Write-Host "Fetching $($item.Key)..."
    try {
        Invoke-WebRequest -Uri $item.Value -OutFile $dest -UserAgent "Mozilla/5.0"
        $len = (Get-Item $dest).Length
        Write-Host "Success: $($item.Key) - $len bytes"
    } catch {
        Write-Host "Failed: $($item.Key) - $_"
    }
}

