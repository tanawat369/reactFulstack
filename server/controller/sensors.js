const warehouse = require('../model/mysql/dbConnect')
const select = require('../model/mysql/dbSelect')

const mysql = require('mysql2')
require('dotenv').config()

exports.allData = (req,res)=>{
    warehouse.query(select.SELECT_all, (err,result)=>{
        if(err){
            res.json({status:"err",message:'Data not sound'})
        }else{
            data = result.reverse()
            console.log(data)
            res.json({result:data})
        }
    })
}

exports.flow = (req,res)=>{
    warehouse.query(select.SELECT_flow, (err,result)=>{
        if(err){
            res.json({status:"err",message:'Data not sound'})
        }else{
            res.json({result})
        }
    })
}
