const GetHomePage = (req,res)=>
{
    res.send('Duy')
}

const GetABCPage = (req,res)=>
{
    res.send('ABCHome')
}

module.exports = {GetABCPage, GetHomePage}