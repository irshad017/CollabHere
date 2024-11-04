const express = require('express') 
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/',async (req,resp)=>{
    resp.json({
        message: "Collaborate Here!! Bro"
    })
})
app.listen(3000)