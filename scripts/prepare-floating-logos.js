const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, '..', 'public', 'images', 'logos')
const destDir = path.join(__dirname, '..', 'public', 'floating-logos')

if (!fs.existsSync(srcDir)) {
  console.error('Source logos directory not found:', srcDir)
  process.exit(1)
}

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })

const files = fs.readdirSync(srcDir).filter(f => /\.(svg|png|jpe?g|webp)$/i.test(f))

const index = []
files.forEach((file, idx) => {
  const ext = path.extname(file)
  const newName = `logo-${idx + 1}${ext}`
  const src = path.join(srcDir, file)
  const dest = path.join(destDir, newName)
  fs.copyFileSync(src, dest)
  index.push({ src: `/floating-logos/${newName}`, name: `Logo ${idx + 1}` })
})

fs.writeFileSync(path.join(destDir, 'index.json'), JSON.stringify(index, null, 2))
console.log('Prepared', index.length, 'floating logos in', destDir)
