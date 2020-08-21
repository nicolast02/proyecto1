// Se requiere el paquete de express
var express = require('express')
var app = express()


//Variables de aplicación
app.set('appName','Centro de Capacitación Técnica')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('public'))


// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

//ruta admin
app.get('/admin', (req, res) => {
    var title = app.get('appName')+" | Admin"
    res.render('admin.ejs', {title: title} )
})

//ruta académico
app.get('/academico', (req, res) => {
    var title = app.get('appName')+" | Académico"
    res.render('academico.ejs', {title: title} )
})

//ruta institucional
app.get('/institucional', (req, res) => {
    var title = app.get('appName')+" | Institucional"
    res.render('institucional.ejs', {title: title} )
})

//ruta contacto
app.get('/contacto', (req, res) => {
    var title = app.get('appName')+" | Contacto"
    res.render('contacto.ejs', {title: title} )
})

//ruta nuestrahistoria
app.get('/nuestrahistoria', (req, res) => {
    var title = app.get('appName')+" | Nuestra Historia"
    res.render('nuestrahistoria.ejs', {title: title} )
})


// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
