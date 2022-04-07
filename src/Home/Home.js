import React from 'react'
import Select, { NonceProvider } from 'react-select';
import crop from './crop.png'
import drop from './drop.png'
import dollar from './dollar_sign.png'
import soil from './soil.png'
import irrigation from './irrigation.png'
import { useState } from 'react';
import "./home.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Bar} from 'react-chartjs-2'; 
import { Chart as ChartJS } from 'chart.js/auto'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
const crops =[
    { label: "None", value: 0},
    { label: "Alfalfa ", value: 1 },
    { label: "Sugar beets ", value:  2},
    { label: " Wheat", value: 3 },
    { label: " Bermuda Grass", value:  4},
    { label: " Klein Grass", value:  5},
    { label: "Sudan Grass ", value:  6},
    { label: "Lettuce ", value: 7 },
    { label: "Carrots ", value:8  },
    { label: "Broccoli ", value:  9},
    { label: "Onion ", value: 10 },
    { label: "Spinach ", value: 11 },
    { label: " Sweet Corn", value:  12},
    
  ]
  const crops_m =[
    { label: "Alfalfa ", value: 1 },
    { label: "Sugar beets ", value:  2},
    { label: " Wheat", value: 3 },
    { label: " Bermuda Grass", value:  4},
    { label: " Klein Grass", value:  5},
    { label: "Sudan Grass ", value:  6},
    { label: "Lettuce ", value: 7 },
    { label: "Carrots ", value:8  },
    { label: "Broccoli ", value:  9},
    { label: "Onion ", value: 10 },
    { label: "Spinach ", value: 11 },
    { label: " Sweet Corn", value:  12},
    
  ]
  const soily = [
    { label: "None", value: 0},
    { label: "Sand ", value: 1 },
    { label: "Sand-Fine ", value:  2},
    { label: "Loamy Sand ", value:  3},
    { label: "Loamy Sand- Fine", value:  4},
    { label: "Sandy Loam ", value: 5},
    { label: "Sandy Loam- Fine ", value:  6},
    { label: "Loam ", value:  7},
    { label: "Silt ", value: 8 },
    { label: "Silty Loam ", value:  9},
    { label: "Sandy Clay Loam ", value:  10},
    { label: "Clay Loam ", value:  11},
    { label: "Silty Clay Loam", value: 12 },
    { label: "Sandy Clay ", value:  13},
    { label : "Silty Clay", value : 14},
    { label: "Silty", value:  15},
  ]
  const itype = [
    { label: "None", value: 0},
    { label: "Flood  ", value:  1},
    { label: "Basin  ", value: 2 },
    { label: "Border  ", value: 3 },
    { label: "Furrow  ", value: 4 },
    { label: " Sprinkler Permanent ", value:  5},
    { label: "Hand-Move  ", value: 6 },
    { label: "Linear-Move  ", value:  7},
    { label: " Side-Roll ", value: 8 },
    { label: "Micro-Mini ", value:  9},
    { label: " Hose-Pull ", value:  10},
    { label: "Center-Pivot ", value:  11},
  ]

function Home() {
    const [pa, setPa] = useState(0);
    const [ai1, setai1] = useState('');
    const [ai2, setai2] = useState('');
    const [ai3, setai3] = useState('');
    const [ai4, setai4] = useState('');
    const [ai5, setai5] = useState('');
    const [ c1, setc1] = useState(null);
    const [ c2, setc2] = useState(null);
    const [ c3, setc3] = useState(null);
    const [ c4, setc4] = useState(null);
    const [ c5, setc5] = useState(null);
    const [ pc1, setpc1] = useState(null);
    const [ pc2, setpc2] = useState(null);
    const [ pc3, setpc3] = useState(null);
    const [ pc4, setpc4] = useState(null);
    const [ pc5, setpc5] = useState(null);
    let [ay1, setay1] = useState(null);
    let [ay2, setay2] = useState(null);
    let [ay3, setay3] = useState(null);
    let [ay4, setay4] = useState(null);
    let [ay5, setay5] = useState(null);
    let [et1, setet1] = useState(null);
    let [et2, setet2] = useState(null);
    let [et3, setet3] = useState(null);
    let [et4, setet4] = useState(null);
    let [et5, setet5] = useState(null);
    let [ayv1, setayv1] = useState('');
    let [ayv2, setayv2] = useState('');
    let [ayv3, setayv3] = useState('');
    let [ayv4, setayv4] = useState('');
    let [ayv5, setayv5] = useState('');
    let [ginfo, setginfo] = useState('');
    let [ais, setais] = useState([])
    let [st, setst] = useState(0);
    let [it, setit] = useState(0);
    const [a,seta]    = useState('');
    const [y, sety] = useState('');
    let [lr, setlr] = useState(0);
    let [d1,setd1] = useState(0);
    let [d2,setd2] = useState(0);
    let [d3,setd3] = useState(0);
    let [d4,setd4] = useState(0);
    let [d5,setd5] = useState(0);
    let [iw0, setiw0] = useState(0);
    let [iw1, setiw1] = useState(0);
    let [iw2, setiw2] = useState(0);
    let [iw3, setiw3] = useState(0);
    let [yr1, setyr1] = useState('');
    let [yr2, setyr2] = useState('');
    let [ie, setie] = useState(68);
    const [c,setc] = useState('');
    const [d,setd] = useState('');
    const [wec,setwa] = useState(null);
    let [ec,setecw] = useState(null);
    const [wec1,setwa1] = useState(null);
    const [wec2,setwa2] = useState(null);
    const [weca,setweca] = useState(null);
    let [aie, setaie] = useState(null);
    const [ans, setans] = useState([]);
    const [ans1, setans1] = useState([]);
    const [ans2, setans2] = useState([]);
    const [cps, setcps] = useState([]);
    const [cpsr, setcpsr] = useState([]);
    const [cpsw, setcpsw] = useState([]);
    let [myc, setmyc] = useState('');
    let [mrc, setmrc] = useState('');
    let [mwc, setmwc] = useState('');
    const [selectedValue, setSelectedValue] = useState([]);
    const [selectedValue1, setSelectedValue1] = useState([]);
    const [selectedValue2, setSelectedValue2] = useState([]);
    let arr = []
    const state = {
        labels: cps,
        datasets: [
          {
            label: 'Yield (kg/ha)',
            backgroundColor: `#9acd32`,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
            data: ans
          }
        ]
      }

      const state1 = {
        labels: cpsr,
        datasets: [
          {
            label: 'Profit ($)',
            backgroundColor: `#daa520`,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
            data: ans1
          }
        ]
      }
      const state2 = {
        labels: cpsw,
        datasets: [
          {
            label: 'Water efficiency (%)',
            backgroundColor: `#00ffff`,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
            data: ans2
          }
        ]
      }
      const datatw ={
        labels: ['LRw','ETa', 'IEw','IWR'],
        datasets: [
          {
            axis: 'y',
            barThickness: 10,
            label: 'Irrigation water demand (mm)',
            backgroundColor: `#1e90ff`,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
            data: [iw0,iw1, iw2, iw3]
          }
        ],
      }
      const dataap = {
        labels: [ai1,ai2, ai3, ai4, ai5],
        datasets: [
          {
            axis: 'y',
            barThickness: 75,
            label: ginfo,
            backgroundColor: `#1e90ff`,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
            data: ais
          }
        ],
      }
      let datadf = [
        { argument: '10%', value: d1 },
        { argument: '20%', value: d2 },
        { argument: '30%', value: d3 },
        { argument: '40%', value: d4 },
        { argument: '50%', value: d5 },
      ];
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2
            }}
        />
    );
    function cpot(){
        if (pa === 0){
            alert("Please enter crop type")
            return
        }
        let ETa = 0;
        let Ym = 0;
        if (pa == 1){
            ETa = 1500;
            Ym = 23;
        }
        else if (pa == 2){
            ETa = 1050;
            Ym = 120;
        }
        else if (pa == 3){
            ETa = 620;
            Ym = 7.5;
        }
        else if (pa == 4){
            ETa = 1200;
            Ym = 19;
        }
        else if (pa == 5){
            ETa = 1250;
            Ym = 24;
        }
        else if (pa == 6){
            ETa = 800;
            Ym = 14;
        }
        else if (pa == 7){
            ETa = 320;
            Ym = 20;
        }
        else if (pa == 8){
            ETa = 600;
            Ym = 110;
        }
        else if (pa == 9){
            ETa = 350;
            Ym = 15;
        }
        else if (pa == 10){
            ETa = 800;
            Ym = 60;
        }
        else if (pa == 11){
            ETa = 200;
            Ym = 14;
        }
        else if (pa == 12){
            ETa =600;
            Ym = 27;
        }
        seta(ETa)
        
    }
    function clr(){
        if (pa === 0){
            alert("Please enter crop type")
            return
        }
        if(ec != null ){
            if(ec != ""){
                if(ec> 5 || ec < 0.5){
                    alert("Irrigation Water Salinity should be between 0.5 to 5")
                    return
                }
            }
            else if(ec == ""){
                ec = null
            }
        }
        if(ie != null ){
            if(ie != ""){
                if(ie> 100 || ie < 50){
                    alert("Irrigation Efficieny should be between 50% to 100%")
                    return
                }
            }
            else if(ie == ""){
                ie = 68
            }
        }
        let ky=0;
        let eci =0;
        let ecw =0;
        let ETm =0;
        let Ym = 0;
        let k = 0;
        let clz = 0;
        let slr = 0;
        let m = 0;
        console.log(ec)
        if (pa == 1){
            ky=1;
            eci = 2;
            ecw = ec ?? 1.3;
            ETm=1500;
            Ym = 23;
           }
        else if ( pa == 2){
           ky = 0.85;
           eci=7;
           ecw=ec ?? 4.7;
           ETm=1050;
           Ym = 120;
        }
        else if (pa == 3){
            ky = 1.05;
           eci=6;
           ecw=ec ?? 4;
           ETm=620;
           Ym = 7.5;
        }
        else if (pa == 4){
            ky = 0.85;
           eci=6.9;
           ecw=ec ?? 4.6;
           ETm=1200;
           Ym = 19;
        }
        else if (pa ==5 ){
            ky = 0.9;
           eci=4;
           ecw= ec ?? 2.7;
           ETm=1250;
           Ym = 24;
        }
        else if (pa == 6){
            ky = 0.9;
           eci=2.8;
           ecw= ec ?? 1.9;
           ETm=800;
           Ym = 14;
        }
        else if (pa ==7 ){
            ky = 1.15;
            eci=1.3;
            ecw= ec ?? 1;
            ETm=320;
            Ym = 20;
        }
        else if (pa == 8){
            ky =1.1 ;
          eci=1;
          ecw= ec ?? 0.8;
          ETm=600;
          Ym = 110;
        }
        else if (pa == 9){
            ky = 1;
           eci=2.8;
           ecw= ec ?? 1.9;
           ETm=350;
           Ym = 15;
        }
        else if (pa == 10){
            ky =1.1 ;
          eci=1.2;
          ecw=ec ?? 0.9;
          ETm=800;
          Ym = 60;
        }
        else if (pa ==11 ){
            ky = 1.15;
           eci=2;
           ecw=ec ?? 1.3;
           ETm=200;
           Ym = 14;
        }
        else if (pa ==12 ){
            ky = 1.1;
          eci=1.7;
          ecw= ec ?? 1.1;
          ETm=600;
          Ym = 27;
        }
        if(it == 0){
            it =1
        }
        if(st == 0){
            st = 5
        }
        if ((it && st) != 0 ){
            if (it == 1 ){
                k = 0.682
                clz = 100
            }
            else if(it ==2){
                k = 0.682
                clz = 100
            }
            else if(it ==3){
                k = 0.682
                clz = 100
            }
            else if(it ==4){
                k = 0.682
                clz = 85
            }
            else {
                k = 0.769
                clz = 100
            }
            if(pa == 1 || pa == 2 || pa == 3 || pa == 4 || pa == 5 || pa == 6 || pa == 10){
                if(st == 1){
                    m = 0.1575;
                }
                else if (st == 2){
                    m = 0.1114
                }
                else if (st == 3){
                    m = 0.202
                }
                else if (st == 4){
                    m = 0.1964
                }
                else if (st == 5){
                    m = 0.239
                }
                else if (st == 6){
                    m = 0.2736
                }
                else if (st == 7){
                    m = 0.376
                }
                else if (st == 8){
                    m = 0.4129
                }
                else if (st == 9){
                    m = 0.405
                }
                else if (st == 10){
                    m = 0.3236
                }
                else if (st == 11){
                    m = 0.3971
                }
                else if (st == 12){
                    m = 0.4031
                }
                else if (st == 13){
                    m = 0.3855
                }
                else if (st == 14){
                    m = 0.4109
                }   
                else if (st == 15){
                    m = 0.429
                }
            }
            else {
                if(st == 1){
                    m = 0.1795;
                }
                else if (st == 2){
                    m = 0.1274
                }
                else if (st == 3){
                    m = 0.23
                }
                else if (st == 4){
                    m = 0.2244
                }
                else if (st == 5){
                    m = 0.273
                }
                else if (st == 6){
                    m = 0.3116
                }
                else if (st == 7){
                    m = 0.428
                }
                else if (st == 8){
                    m = 0.4709
                }
                else if (st == 9){
                    m = 0.461
                }
                else if (st == 10){
                    m = 0.3676
                }
                else if (st == 11){
                    m = 0.4511
                }
                else if (st == 12){
                    m = 0.4591
                }
                else if (st == 13){
                    m = 0.4375
                }
                else if (st == 14){
                    m = 0.4669
                }   
                else if (st == 15){
                    m = 0.487
                }
            }
            slr = ecw/(((2/(k * m))*eci) - ecw)
            console.log(slr)
            setd((slr * 100).toFixed(2))
        }
        d1 = ky*(1-((0.9 * ETm)/ETm)) ;
        d2 = ky*(1-((0.8 * ETm)/ETm)) ;
        d3 = ky*(1-((0.7 * ETm)/ETm)) ;
        d4 = ky*(1-((0.6 * ETm)/ETm)) ;
        d5 = ky*(1-((0.5 * ETm)/ETm)) ;
        setd1((d1*100).toFixed(0))
        setd2((d2*100).toFixed(0))
        setd3((d3*100).toFixed(0))
        setd4((d4*100).toFixed(0))
        setd5((d5*100).toFixed(0))
        lr = eci/((5*ecw) - eci)
        iw0= ((ETm )/((1-lr)))-ETm
        iw1= (ETm )/(ie/100)
        iw2 = iw1 - ETm
        iw3= (ETm )/((ie/100)*(1-lr))
        setiw1(ETm.toFixed(0))
        setiw2(iw2.toFixed(0))
        setiw3(iw3.toFixed(0))
        setiw0(iw0.toFixed(0))
        setc((lr*100).toFixed(2))
        sety(Ym)
       }
       const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
      }
      const handleChange1 = (e) => {
        setSelectedValue1(Array.isArray(e) ? e.map(x => x.value) : []);
      }
      const dynamictable = (x) => {
          console.log(x)
          return (
              <td>x</td>
          )
      }
      const handleChange2 = (e) => {
        //console.log(e[e.length - 1].label)
        //console.log(e[0].label)
        dynamictable(e[e.length - 1].label)
        arr.push(e[e.length - 1].label)
        setSelectedValue2(Array.isArray(e) ? e.map(x => x.value) : []); 
        console.log(arr)
        //setSelectedValue2(selectedValue2 => [...selectedValue2, e[0].label])
        //console.log(selectedValue2)
        // console.log(selectedValue2)
        // var rows = [];
        // for (var i =0; i<selectedValue2.length;i++){
        //     rows.push(crops[selectedValue2[i]-1].label)
        // }
        // seta3(rows)
       //console.log(rows) 
       //console.log(e[0].label)
        
      }
 
    function myo(){
        if (wec == null){
            alert("Please enter amount of water available")
            return
        }
        let eci =0;
        let ecw =0;
        let ETm =0;
        let ky = 0;
        let Ym = 0;
        let Eta = 0;
        let Ya = 0;
        while(ans.length > 0) {
            ans.pop();
        }
        while(cps.length > 0) {
            cps.pop();
        }
        for(let i=0;i<selectedValue.length;i++){
            if (selectedValue[i] == 1){
                eci = 2;
                ecw = 1.3;
                ETm=1500;
                ky = 1;
                Ym = 23;
               }
            else if ( selectedValue[i] == 2){
               eci=7;
               ecw= 4.7;
               ETm=1050;
               ky = 0.85;
               Ym = 120;
            }
            else if (selectedValue[i] == 3){
               eci=6;
               ecw= 4;
               ETm=620;
               ky = 1.05;
               Ym = 7.5;
            }
            else if (selectedValue[i] == 4){
               eci=6.9;
               ecw= 4.6;
               ETm=1200;
               ky = 0.9;
               Ym = 19;
            }
            else if (selectedValue[i] ==5 ){
               eci=4;
               ecw=  2.7;
               ETm=1250;
               ky = 0.9;
               Ym = 24;
            }
            else if (selectedValue[i] == 6){
               eci=2.8;
               ecw= 1.9;
               ETm=800;
               ky = 0.9;
               Ym = 14;
            }
            else if (selectedValue[i] ==7 ){
                eci=1.3;
                ecw= 1;
                ETm=320;
                ky = 1.15;
               Ym = 20;
            }
            else if (selectedValue[i] == 8){
              eci=1;
              ecw= 0.8;
              ETm=600;
              ky = 1.1;
              Ym = 110;
            }
            else if (selectedValue[i] == 9){
               eci=2.8;
               ecw= 1.9;
               ETm=350;
               ky = 1;
               Ym = 15;
            }
            else if (selectedValue[i] == 10){
              eci=1.2;
              ecw=0.9;
              ETm=800;
              ky = 1.1;
               Ym = 60;
            }
            else if (selectedValue[i] ==11 ){
               eci=2;
               ecw=1.3;
               ETm=200;
               ky = 1.15;
               Ym = 14;
            }
            else if (selectedValue[i] ==12 ){
              eci=1.7;
              ecw= 1.1;
              ETm=600;
              ky = 1.1;
               Ym = 27;
            }
            Eta = wec * 0.68 * (1-(eci/((5*ecw)-eci)))
            Ya = Ym * ((ky*((Eta/ETm)-1))+1)
            // setans([...ans,Ya]);
            ans.push(Ya)
        }
        for(let i =0 ; i<selectedValue.length;i++){
            //cps.push(crops[selectedValue[i]].label)
            setcps(cps => [...cps, crops_m[selectedValue[i]-1].label])
        }
        let i = ans.indexOf(Math.max(...ans));
        setmyc(crops_m[selectedValue[i]-1].label)
    }
    function mr(){
        if (wec1 == null){
            alert("Please enter amount of water available")
            return
        }
        let eci =0;
        let ecw =0;
        let ETm =0;
        let ky = 0;
        let Ym = 0;
        let Eta = 0;
        let Ya = 0;
        let cost = 200;
        let pcost = 0;
        let revenue = 0;
        let profit =0 ;
        while(ans1.length > 0) {
            ans1.pop();
        }
        while(cpsr.length > 0) {
            cpsr.pop();
        }
        for(let i=0;i<selectedValue1.length;i++){
            if (selectedValue1[i] == 1){
                eci = 2;
                ecw = 1.3;
                ETm=1500;
                ky = 1;
                Ym = 23;
               }
            else if ( selectedValue1[i] == 2){
               eci=7;
               ecw= 4.7;
               ETm=1050;
               ky = 0.85;
               Ym = 120;
            }
            else if (selectedValue1[i] == 3){
               eci=6;
               ecw= 4;
               ETm=620;
               ky = 1.05;
               Ym = 7.5;
            }
            else if (selectedValue1[i] == 4){
               eci=6.9;
               ecw= 4.6;
               ETm=1200;
               ky = 0.9;
               Ym = 19;
            }
            else if (selectedValue1[i] ==5 ){
               eci=4;
               ecw=  2.7;
               ETm=1250;
               ky = 0.9;
               Ym = 24;
            }
            else if (selectedValue1[i] == 6){
               eci=2.8;
               ecw= 1.9;
               ETm=800;
               ky = 0.9;
               Ym = 14;
            }
            else if (selectedValue1[i] ==7 ){
                eci=1.3;
                ecw= 1;
                ETm=320;
                ky = 1.15;
               Ym = 20;
            }
            else if (selectedValue1[i] == 8){
              eci=1;
              ecw= 0.8;
              ETm=600;
              ky = 1.1;
              Ym = 110;
            }
            else if (selectedValue1[i] == 9){
               eci=2.8;
               ecw= 1.9;
               ETm=350;
               ky = 1;
               Ym = 15;
            }
            else if (selectedValue1[i] == 10){
              eci=1.2;
              ecw=0.9;
              ETm=800;
              ky = 1.1;
               Ym = 60;
            }
            else if (selectedValue1[i] ==11 ){
               eci=2;
               ecw=1.3;
               ETm=200;
               ky = 1.15;
               Ym = 14;
            }
            else if (selectedValue1[i] ==12 ){
              eci=1.7;
              ecw= 1.1;
              ETm=600;
              ky = 1.1;
               Ym = 27;
            }
            Eta = wec1 * 0.68 * (1-(eci/((5*ecw)-eci)))
            Ya = Ym * ((ky*((Eta/ETm)-1))+1)
            // console.log(Eta)
            // console.log(Ya)
            revenue = Ya * cost
            pcost = (0.2) * revenue
            // console.log(pcost)
            profit = revenue - pcost
            ans1.push(profit)
        }
        for(let i =0 ; i<selectedValue1.length;i++){
            //cps.push(crops[selectedValue[i]].label)
            setcpsr(cpsr => [...cpsr, crops_m[selectedValue1[i]-1].label])
        }
        let i = ans1.indexOf(Math.max(...ans1));
        setmrc(crops_m[selectedValue1[i]-1].label)
    }
    function mwe(){
        if (wec2 == null){
            alert("Please enter amount of water available")
            return
        }
        let eci =0;
        let ecw =0;
        let ETm =0;
        let ky = 0;
        let Ym = 0;
        let Eta = 0;
        let Ya = 0;
        while(ans2.length > 0) {
            ans2.pop();
        }
        while(cpsw.length > 0) {
            cpsw.pop();
        }
        for(let i=0;i<selectedValue2.length;i++){
            if (selectedValue2[i] == 1){
                eci = 2;
                ecw = 1.3;
                ETm=1500;
                ky = 1;
                Ym = 23;
               }
            else if ( selectedValue2[i] == 2){
               eci=7;
               ecw= 4.7;
               ETm=1050;
               ky = 0.85;
               Ym = 120;
            }
            else if (selectedValue2[i] == 3){
               eci=6;
               ecw= 4;
               ETm=620;
               ky = 1.05;
               Ym = 7.5;
            }
            else if (selectedValue2[i] == 4){
               eci=6.9;
               ecw= 4.6;
               ETm=1200;
               ky = 0.9;
               Ym = 19;
            }
            else if (selectedValue2[i] ==5 ){
               eci=4;
               ecw=  2.7;
               ETm=1250;
               ky = 0.9;
               Ym = 24;
            }
            else if (selectedValue2[i] == 6){
               eci=2.8;
               ecw= 1.9;
               ETm=800;
               ky = 0.9;
               Ym = 14;
            }
            else if (selectedValue2[i] ==7 ){
                eci=1.3;
                ecw= 1;
                ETm=320;
                ky = 1.15;
               Ym = 20;
            }
            else if (selectedValue2[i] == 8){
              eci=1;
              ecw= 0.8;
              ETm=600;
              ky = 1.1;
              Ym = 110;
            }
            else if (selectedValue2[i] == 9){
               eci=2.8;
               ecw= 1.9;
               ETm=350;
               ky = 1;
               Ym = 15;
            }
            else if (selectedValue2[i] == 10){
              eci=1.2;
              ecw=0.9;
              ETm=800;
              ky = 1.1;
               Ym = 60;
            }
            else if (selectedValue2[i] ==11 ){
               eci=2;
               ecw=1.3;
               ETm=200;
               ky = 1.15;
               Ym = 14;
            }
            else if (selectedValue2[i] ==12 ){
              eci=1.7;
              ecw= 1.1;
              ETm=600;
              ky = 1.1;
               Ym = 27;
            }
            Eta = wec2 * 0.68 * (1-(eci/((5*ecw)-eci)))
            Ya = Ym * ((ky*((Eta/ETm)-1))+1)
            ans2.push((Ya/wec2))
        }
        console.log(selectedValue2)
        for(let i =0 ; i<selectedValue2.length;i++){
            //cps.push(crops[selectedValue[i]].label)
            setcpsw(cpsw => [...cpsw, crops_m[selectedValue2[i]-1].label])
        }
        let i = ans2.indexOf(Math.max(...ans2));
        setmwc(crops_m[selectedValue2[i]-1].label)
    }
    function cald(){
        if (pa == 0){
            alert("Please enter crop type")
            return
        }
        let ky=0;
        let Etm=0;
        if (pa == 1){
         ky=1;
         Etm=1500;
        }
        else if ( pa == 2){
         ky = 0.85;
         Etm = 1050;
     }
     else if (pa == 3){
         ky = 1.05;
         Etm = 620;
     }
     else if (pa == 4){
         ky = 0.9;
         Etm = 1200;
     }
     else if (pa ==5 ){
         ky = 0.9;
         Etm = 1250;
     }
     else if (pa == 6){
         ky = 0.9;
         Etm = 800;
     }
     else if (pa ==7 ){
         ky = 1.15;
         Etm = 320;
     }
     else if (pa == 8){
         ky =1.1 ;
         Etm =600 ;
     }
     else if (pa == 9){
         ky = 1;
         Etm = 350;
     }
     else if (pa == 10){
         ky =1.1 ;
         Etm = 800;
     }
     else if (pa ==11 ){
         ky = 1.15;
         Etm = 200;
     }
     else if (pa ==12 ){
         ky = 1.1;
         Etm = 600;
     }
     d1 = ky*(1-((0.9 * Etm)/Etm)) ;
     d2 = ky*(1-((0.8 * Etm)/Etm)) ;
     d3 = ky*(1-((0.7 * Etm)/Etm)) ;
     d4 = ky*(1-((0.6 * Etm)/Etm)) ;
     d5 = ky*(1-((0.5 * Etm)/Etm)) ;
     setd1((d1*100).toFixed(2))
     setd2((d2*100).toFixed(2))
     setd3((d3*100).toFixed(2))
     setd4((d4*100).toFixed(2))
     setd5((d5*100).toFixed(2))
     
    }
    function rap(){
        if (weca == null){
            alert("Please enter amount of water available")
            return
        }
        if(ay1 != null ){
            if(ay1 != ""){
            if(ay1 < 5 || ay1 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay2 != null){
            if(ay2 != ""){
            if(ay2 < 5 || ay2 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay3 != null){
            if(ay3 != ""){
            if(ay3 < 5 || ay3 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay4 != null){
            if(ay4 != ""){
            if(ay4 < 5 || ay4 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay5 != null){
            if(ay5 != ""){
            if(ay5 < 5 || ay5 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(et1 != null){
            if(et1 != ""){
                if(et1 < 100 || et1 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et2 != null){
            if(et2 != ""){
                if(et2 < 100 || et2 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et3 != null){
            if(et3 != ""){
                if(et3 < 100 || et3 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et4 != null){
            if(et4 != ""){
                if(et4 < 100 || et4 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et5 != null){
            if(et5 != ""){
                if(et5 < 100 || et5 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(aie != null ){
            if(aie != ""){
                if(aie> 100 || aie < 50){
                    alert("Irrigation Efficieny should be between 50% to 100%")
                    return
                }
            }
            else if(aie == "" || aie == null){
                aie = 68
            }
        }
        else if (aie == null){
            aie =68
        }
        setginfo('Profit ($)') 
        let eci =0;
        let ecw =0;
        let ETm =0;
        let ky = 0;
        let Ym = 0;
        let Eta = 0;
        let Ya = 0;
        let cost = 0;
        let pcost = 0;
        let revenue = 0;
        let profit =0 ;
        let ans_arr = [];
        let my_arr = [ayv1, ayv2, ayv3, ayv4, ayv5]
        let y_arr = [ay1, ay2, ay3, ay4, ay5]
        let etm_arr = [et1, et2, et3, et4, et5]
        let c_arr = [c1,c2, c3, c4, c5]
        let p_arr = [pc1, pc2, pc3, pc4, pc5]
        for(let i=0;i<my_arr.length;i++){
            if (y_arr[i] == ""){
                y_arr[i] = null
            }
            if (etm_arr[i] == ""){
                etm_arr[i] = null
            }
            if (my_arr[i] == 1){
                eci = 2;
                ecw = 1.3;
                ETm= etm_arr[i] ?? 1500;
                ky = 1;
                Ym = y_arr[i] ?? 23;
                cost = c_arr[i] ?? 200;
               }
            else if ( my_arr[i] == 2){
               eci=7;
               ecw= 4.7;
               ETm=etm_arr[i] ?? 1050;
               ky = 0.85;
               Ym = y_arr[i] ?? 120;
               cost = c_arr[i] ?? 200;
            }
            else if (my_arr[i] == 3){
               eci=6;
               ecw= 4;
               ETm= etm_arr[i] ?? 620;
               ky = 1.05;
               Ym = y_arr[i] ?? 7.5;
               cost = c_arr[i] ?? 200;
            }
            else if (my_arr[i] == 4){
               eci=6.9;
               ecw= 4.6;
               ETm= etm_arr[i] ?? 1200;
               ky = 0.9;
               Ym =y_arr[i] ??  19;
               cost = c_arr[i] ?? 200;
            }
            else if (my_arr[i] ==5 ){
               eci=4;
               ecw=  2.7;
               ETm= etm_arr[i] ?? 1250;
               ky = 0.9;
               Ym = y_arr[i] ?? 24;
               cost = c_arr[i] ?? 200;
            }
            else if (my_arr[i] == 6){
               eci=2.8;
               ecw= 1.9;
               ETm= etm_arr[i] ?? 800;
               ky = 0.9;
               Ym = y_arr[i] ?? 14;
               cost = c_arr[i] ?? 200;
            }
            else if (my_arr[i] ==7 ){
                eci=1.3;
                ecw= 1;
                ETm= etm_arr[i] ?? 320;
                ky = 1.15;
               Ym = y_arr[i] ?? 20;
               cost = c_arr[i] ?? 200;
            }
            else if (my_arr[i] == 8){
              eci=1;
              ecw= 0.8;
              ETm= etm_arr[i] ?? 600;
              ky = 1.1;
              Ym = y_arr[i] ?? 110;
              cost = c_arr[i] ?? 200;
            }
            else if (my_arr[i] == 9){
               eci=2.8;
               ecw= 1.9;
               ETm= etm_arr[i] ?? 350;
               ky = 1;
               Ym = y_arr[i] ?? 15;
               cost = c_arr[i] ?? 200;
            }
            else if (my_arr[i] == 10){
              eci=1.2;
              ecw=0.9;
              ETm= etm_arr[i] ?? 800;
              ky = 1.1;
               Ym = y_arr[i] ?? 60;
               cost = c_arr[i] ?? 200;
            }
            else if (my_arr[i] ==11 ){
               eci=2;
               ecw=1.3;
               ETm=etm_arr[i] ?? 200;
               ky = 1.15;
               Ym = y_arr[i] ?? 14;
               cost = c_arr[i] ?? 200;
            }
            else if (my_arr[i] ==12 ){
              eci=1.7;
              ecw= 1.1;
              ETm= etm_arr[i] ?? 600;
              ky = 1.1;
               Ym = y_arr[i] ?? 27;
               cost = c_arr[i] ?? 200;
            }
            else{
                Ym = 0;
            }
            Eta = weca * (aie/100) * (1-(eci/((5*ecw)-eci)))
            Ya = Ym * ((ky*((Eta/ETm)-1))+1)
            revenue = Ya * cost
            pcost = p_arr[i] ?? (0.2 * revenue)
            profit = revenue - pcost
            ans_arr.push(profit)
        }
        setais(ans_arr)

    }
    function yap(){
        if (weca == null){
            alert("Please enter amount of water available")
            return
        }
        // if(ay1 != null ||ay2 != null || ay3 != null || ay4 != null || ay5 != null){
        //     if(ay1 != "" || ay2 != "" || ay3 != "" || ay4 != "" || ay5 != ""){
        //         if(ay1 < 5 || ay1 > 150 || ay2 < 5 || ay2 > 150 || ay3 < 5 || ay3 > 150|| ay4 < 5 || ay4 > 150|| ay5 < 5 || ay5 > 150){
        //             alert("Expected yield should be in the range of 5 to 150 ")
        //         }
        //     }
        // }
        if(ay1 != null ){
            if(ay1 != ""){
            if(ay1 < 5 || ay1 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay2 != null){
            if(ay2 != ""){
            if(ay2 < 5 || ay2 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay3 != null){
            if(ay3 != ""){
            if(ay3 < 5 || ay3 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay4 != null){
            if(ay4 != ""){
            if(ay4 < 5 || ay4 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay5 != null){
            if(ay5 != ""){
            if(ay5 < 5 || ay5 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(et1 != null){
            if(et1 != ""){
                if(et1 < 100 || et1 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et2 != null){
            if(et2 != ""){
                if(et2 < 100 || et2 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et3 != null){
            if(et3 != ""){
                if(et3 < 100 || et3 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et4 != null){
            if(et4 != ""){
                if(et4 < 100 || et4 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et5 != null){
            if(et5 != ""){
                if(et5 < 100 || et5 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(aie != null ){
            if(aie != ""){
                if(aie> 100 || aie < 50){
                    alert("Irrigation Efficieny should be between 50% to 100%")
                    return
                }
            }
            else if(aie == ""){
                aie = 68
            }
        }
        else if (aie == null){
            aie =68
        }
        setginfo('Crop Yield (tons/ha)') 
        let eci =0;
        let ecw =0;
        let ETm =0;
        let ky = 0;
        let Ym = 0;
        let Eta = 0;
        let Ya = 0;
        let ans_arr = [];
        let my_arr = [ayv1, ayv2, ayv3, ayv4, ayv5]
        let y_arr = [ay1, ay2, ay3, ay4, ay5]
        let etm_arr = [et1, et2, et3, et4, et5]
        while(ais.length > 0) {
            ais.pop();
        }
        // while(cps.length > 0) {
        //     cps.pop();
        //}
        for(let i=0;i<my_arr.length;i++){
            if (y_arr[i] == ""){
                y_arr[i] = null
            }
            if (etm_arr[i] == ""){
                etm_arr[i] = null
            }
            if (my_arr[i] == 1){
                eci = 2;
                ecw = 1.3;
                ETm= etm_arr[i] ?? 1500;
                ky = 1;
                Ym = y_arr[i] ?? 23;
               }
            else if ( my_arr[i] == 2){
               eci=7;
               ecw= 4.7;
               ETm= etm_arr[i] ?? 1050;
               ky = 0.85;
               Ym = y_arr[i] ?? 120;
            }
            else if (my_arr[i] == 3){
               eci=6;
               ecw= 4;
               ETm= etm_arr[i] ?? 620;
               ky = 1.05;
               Ym = y_arr[i] ??  7.5;
            }
            else if (my_arr[i] == 4){
               eci=6.9;
               ecw= 4.6;
               ETm= etm_arr[i] ?? 1200;
               ky = 0.9;
               Ym = y_arr[i] ?? 19;
            }
            else if (my_arr[i] ==5 ){
               eci=4;
               ecw=  2.7;
               ETm= etm_arr[i] ?? 1250;
               ky = 0.9;
               Ym = y_arr[i] ??24;
            }
            else if (my_arr[i] == 6){
               eci=2.8;
               ecw= 1.9;
               ETm= etm_arr[i] ?? 800;
               ky = 0.9;
               Ym = y_arr[i] ?? 14;
            }
            else if (my_arr[i] ==7 ){
                eci=1.3;
                ecw= 1;
                ETm= etm_arr[i] ?? 320;
                ky = 1.15;
               Ym =  y_arr[i] ?? 20;
            }
            else if (my_arr[i] == 8){
              eci=1;
              ecw= 0.8;
              ETm= etm_arr[i] ?? 600;
              ky = 1.1;
              Ym = y_arr[i] ?? 110;
            }
            else if (my_arr[i] == 9){
               eci=2.8;
               ecw= 1.9;
               ETm= etm_arr[i] ?? 350;
               ky = 1;
               Ym = y_arr[i] ?? 15;
            }
            else if (my_arr[i] == 10){
              eci=1.2;
              ecw=0.9;
              ETm= etm_arr[i] ?? 800;
              ky = 1.1;
               Ym = y_arr[i] ?? 60;
            }
            else if (my_arr[i] ==11 ){
               eci=2;
               ecw=1.3;
               ETm= etm_arr[i] ?? 200;
               ky = 1.15;
               Ym = y_arr[i] ?? 14;
            }
            else if (my_arr[i] ==12 ){
              eci=1.7;
              ecw= 1.1;
              ETm= etm_arr[i] ?? 600;
              ky = 1.1;
               Ym = y_arr[i] ?? 27;
            }
            else{
                Ym = 0;
            }
            Eta = weca * (aie/100) * (1-(eci/((5*ecw)-eci)))
            Ya = Ym * ((ky*((Eta/ETm)-1)+1))
            // setans([...ans,Ya]);
            ans_arr.push(Ya)
        }
        setais(ans_arr)
    }
    function mweap(){
        if (weca == null){
            alert("Please enter amount of water available")
            return
        }
        if(ay1 != null ){
            if(ay1 != ""){
            if(ay1 < 5 || ay1 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay2 != null){
            if(ay2 != ""){
            if(ay2 < 5 || ay2 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay3 != null){
            if(ay3 != ""){
            if(ay3 < 5 || ay3 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay4 != null){
            if(ay4 != ""){
            if(ay4 < 5 || ay4 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(ay5 != null){
            if(ay5 != ""){
            if(ay5 < 5 || ay5 > 150){
                alert("Expected yield should be in the range of 5(tons/ha) to 150(tons/ha) ")
                return
            }
        }
        }
        if(et1 != null){
            if(et1 != ""){
                if(et1 < 100 || et1 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et2 != null){
            if(et2 != ""){
                if(et2 < 100 || et2 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et3 != null){
            if(et3 != ""){
                if(et3 < 100 || et3 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et4 != null){
            if(et4 != ""){
                if(et4 < 100 || et4 > 1600){
                    alert("ETm should be in the range of 100mm to 1600mm")
                    return
                }
            }
        }
        if(et5 != null){
            if(et5 != ""){
                if(et5 < 100 || et5 > 1600){
                    alert("ETm should be in the range of 100mm  to 1600mm")
                    return
                }
            }
        }
        if(aie != null ){
            if(aie != ""){
                if(aie> 100 || aie < 50){
                    alert("Irrigation Efficieny should be between 50% to 100%")
                    return
                }
            }
            else if(aie == "" ){
                aie = 68
            }
        }
        else if (aie == null){
            aie =68
        }
        setginfo('Water use efficiency (tons/(ha*mm))') 
        let eci =0;
        let ecw =0;
        let ETm =0;
        let ky = 0;
        let Ym = 0;
        let Eta = 0;
        let Ya = 0;
        let ans_arr = [];
        let my_arr = [ayv1, ayv2, ayv3, ayv4, ayv5]
        let y_arr = [ay1, ay2, ay3, ay4, ay5]
        let etm_arr = [et1, et2, et3, et4, et5]
        while(ais.length > 0) {
            ais.pop();
        }
        for(let i=0;i<my_arr.length;i++){
            if (y_arr[i] == ""){
                y_arr[i] = null
            }
            if (etm_arr[i] == ""){
                etm_arr[i] = null
            }
            if (my_arr[i] == 1){
                eci = 2;
                ecw = 1.3;
                ETm= etm_arr[i] ?? 1500;
                ky = 1;
                Ym = y_arr[i] ?? 23;
               }
            else if ( my_arr[i] == 2){
               eci=7;
               ecw= 4.7;
               ETm= etm_arr[i] ?? 1050;
               ky = 0.85;
               Ym =y_arr[i] ?? 120;
            }
            else if (my_arr[i] == 3){
               eci=6;
               ecw= 4;
               ETm= etm_arr[i] ?? 620;
               ky = 1.05;
               Ym = y_arr[i] ?? 7.5;
            }
            else if (my_arr[i] == 4){
               eci=6.9;
               ecw= 4.6;
               ETm= etm_arr[i] ?? 1200;
               ky = 0.9;
               Ym = y_arr[i] ?? 19;
            }
            else if (my_arr[i] ==5 ){
               eci=4;
               ecw=  2.7;
               ETm= etm_arr[i] ?? 1250;
               ky = 0.9;
               Ym = y_arr[i] ?? 24;
            }
            else if (my_arr[i] == 6){
               eci=2.8;
               ecw= 1.9;
               ETm= etm_arr[i] ?? 800;
               ky = 0.9;
               Ym =y_arr[i] ?? 14;
            }
            else if (my_arr[i] ==7 ){
                eci=1.3;
                ecw= 1;
                ETm= etm_arr[i] ?? 320;
                ky = 1.15;
               Ym = y_arr[i] ?? 20;
            }
            else if (my_arr[i] == 8){
              eci=1;
              ecw= 0.8;
              ETm= etm_arr[i] ?? 600;
              ky = 1.1;
              Ym = y_arr[i] ?? 110;
            }
            else if (my_arr[i] == 9){
               eci=2.8;
               ecw= 1.9;
               ETm= etm_arr[i] ?? 350;
               ky = 1;
               Ym = y_arr[i] ?? 15;
            }
            else if (my_arr[i] == 10){
              eci=1.2;
              ecw=0.9;
              ETm= etm_arr[i] ?? 800;
              ky = 1.1;
               Ym = y_arr[i] ?? 60;
            }
            else if (my_arr[i] ==11 ){
               eci=2;
               ecw=1.3;
               ETm= etm_arr[i] ?? 200;
               ky = 1.15;
               Ym =y_arr[i] ?? 14;
            }
            else if (my_arr[i] ==12 ){
              eci=1.7;
              ecw= 1.1;
              ETm= etm_arr[i] ?? 600;
              ky = 1.1;
               Ym = y_arr[i] ?? 27;
            }
            else{
                Ym = 0;
            }
            console.log(aie)
            Eta = weca * (aie/100) * (1-(eci/((5*ecw)-eci)))
            Ya = Ym * ((ky*((Eta/ETm)-1))+1)
            ans_arr.push((Ya/weca))
        }
        setais(ans_arr)
    }
  
      
    return (
        <div className='home'>
            <div className='r0'>
                <div className='cardr0'>
                <div className='crop-image'>
                <img src={crop} />   
                <p> Crop</p>
                </div>
                <div className = "crop_details ">
                <p className = "input">
                    <Select 
                    onChange={(opt)=>{
                    let val=opt.value;
                    console.log(opt.label, opt.value)
                    setPa(val)
                    }
                    }
                    options ={crops}
                    //onChange={opt => console.log(opt.label, opt.value)}
                    />
                </p> 
                </div>
                </div>

                <div className='cardr0'>
                    <div className='drop-image'>
                        <img src={drop} />   
                        <p> Irrigation Water Salinity</p>
                    </div>
                    <div className = "crop_details ">
                        <p className = "input">
                    
                        </p> 
                        <p><form>
                        <label>Water EC (dS/m):{' '}
                        <input type="number" placeholder = "(dS/m)" style={{width: "55px"}} onChange = {e => setecw(e.target.value)}/>
                        </label>
                    </form></p>
                    </div>
            
                </div>

                <div className='cardr0'>
            <div className='soil-image'>
            <img src={soil} />   
            <p> Soil Texture</p>
            </div>
            <div className = "crop_details ">
            <p className = "input">
            <Select
            options ={soily}
            onChange={(opt)=>{
                let val=opt.value;
                console.log(opt.label, opt.value)
                setst(val)
                }
                } />
            </p> 
            <p><small> <a href={"https://casoilresource.lawr.ucdavis.edu/gmap/"}> Look up soil map</a></small></p>
            </div>
                </div>

                <div className='cardr0'>
                    <div className='irrigation-image'>
                    <img src={irrigation} />   
                    <p> Irrigation System</p>
                    </div>
                    <div className = "crop_details ">
                    <p className = "input">
                    <Select id = "is"
                    options ={itype}
                    onChange={(opt)=>{
                        let val=opt.value;
                        console.log(opt.label, opt.value)
                        setit(val)
                        }
                        } />
                    </p> 
                    <p className="if"><form>
                    <label>Irrigation Efficiency (%):{' '}
                    <input type="number" placeholder = "%" style={{width: "50px"}} onChange = {e => setie(e.target.value)}/>
                    </label>
                    </form>
                    </p>
                    </div>
                </div>
            </div>
            <div className='fob'><button className="gooey-button" onClick = {clr}>Find out yield and crop requirements</button></div>
            <div className='r1'>
                <div className='c0'>
                    <div className='ay'>
                        <h2>Actual Yield</h2>
                        <div className='eto'><p>{y} (tons/ha)</p></div>
                    </div>
                    <div className='di'>
                    <h2>Deficit Irrigation</h2>
                    
                    <h5>X-axis: Deficit Irrigation(%), Y-axis: Yield Reduction(%)</h5>
                    <div className="graphdi" >
                    <Paper className="graph1" >
                    <Chart 
                        data={datadf}
                        
                    >
                        <ArgumentAxis  />
                        <ValueAxis  />
                    
                        <BarSeries valueField="value" argumentField="argument" />
                        </Chart>
                    </Paper>
                    </div>
                    </div>
                </div> 
                <div className='c1'> 
                    <div className = "lr">
                    <h2> Leaching and Irrigation Water Requirement</h2>
                        <div className='lrp'>
                            <div className='nlr'>
                                {pa.myPaVal}
                                <div className='cb'>
                                <div className='lrl'><p>Leaching Requirement:</p></div>
                                <div className="Default">
                                <CircularProgressbar value={c} text={`${c}%`} style={{ width: 400, height: 400 }} />
                                </div>
                                </div>
                            </div>
                            <div className='nlr'>
                                {pa.myPaVal}
                                <div className='cb'>
                                <div className='lrl'><p>Leaching Requirement(SALEACH):</p></div>
                                <div className="Default">
                                <CircularProgressbar value={d} text={`${d}%`} />
                                </div>
                                </div>
                            </div>
                        </div>
                    <div className='twgraph'><Bar
                    data={datatw}
                    options={{
                        indexAxis: 'y',
                        title:{
                        display:true,
                        fontSize:2,
                        },
                        /*scales: {x: { title: { display: true, text: 'seconds'}}},*/
                    }
                }
                    /></div>
                    <div className='graphdes'>
                    <div className='gdes'><h9>LRw -> Total water required for leaching</h9></div>
                    <div className='gdes'><h9>ETa -> Actual ET</h9></div>
                    <div className='gdes'><h9>IEw -> Water required to meet the Irrigation Efficiency demands</h9></div>
                    <div className='gdes'><h9>IWR -> Total water requirement based on ET, IE and LR</h9></div>
                    </div>
                    <div className='saleach'>
                    <h3>Want to know more about Leaching related Yield Reduction?</h3>
                    <p>Follow the link below</p>
                    <a href="https://salinity.ucr.edu/Sindex.html"> SALEACH</a>
                    </div>
                    </div>  
                </div> 
            </div>
            <div className="sep">
            <ColoredLine color="black" />
            </div>
            <div className='my'>
                    <div className='h'>
                            <h1>Maximize Yield?</h1>
                    </div>
                    <div className='inp'>
                            <div className='cardc'>
                                <div className='crop-image'>
                                <img src={crop} />   
                                <p>Select the crops to compare</p>
                                </div>
                                <div className = "crop_details1">
                                <p>
                                    <Select
                                    onChange={handleChange}
                                    isMulti
                                    options={crops_m}
                                    value={crops_m.filter(obj => selectedValue.includes(obj.value))}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    />
                                   
                                </p> 
                                
                                </div>
                            </div> 
                            <div className='card1'>
                                <div className='crop-image'>
                                <img src={drop} />   
                                <p> Water Available(mm)</p>
                                <input type="number" placeholder = "Enter the amount of water " style={{width: "175px"}} onChange = {e => setwa(e.target.value)}/>
                                </div>
                            </div>
                            <div className='card1'>
                                <h4><u>Advanced/Optional Input</u></h4>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '17ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <TextField id="standard-basic" type="number" label="Irrigation Efficiency" variant="standard" />
                                </Box>
                            </div>
                    </div>
                    <div className='myo'>
                        <button className="gooey-button" onClick = {myo}>Calculate</button>
                        <div className='graph'>
                            <Bar
                            data={state}
                            options={{
                                title:{
                                display:true,
                                fontSize:20
                                },
                            }}
                            />
                        </div>
                    </div>
                    <h4>Maximum Yield will be achieved by {myc} </h4>
            </div>
            <div className="sep">
            <ColoredLine color="black" />
            </div>
            <div className='my'>
                    <div className='h'>
                            <h1>Maximize Revenue?</h1>
                    </div>
                    <div className='inp'>
                            <div className='cardc'>
                                <div className='crop-image'>
                                <img src={crop} />   
                                <p>Select the crops to compare</p>
                                </div>
                                <div className = "crop_details1">
                                <p>
                                    <Select
                                    onChange={handleChange1}
                                    isMulti
                                    options={crops_m}
                                    value={crops_m.filter(obj => selectedValue1.includes(obj.value))}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    />
                                   
                                </p> 
                                
                                </div>
                            </div> 
                            <div className='card1'>
                                <div className='crop-image'>
                                <img src={drop} />   
                                <p> Water Available(mm)</p>
                                <input type="number" placeholder = "Enter the amount of water " style={{width: "175px"}} onChange = {e => setwa1(e.target.value)}/>
                                </div>
                            </div>
                            <div className='card1'>
                                <div className='crop-image'>
                                <img src={dollar} />   
                                <p> Production cost($)</p>
                                <input type="number" placeholder = "Enter the amount " style={{width: "175px"}} onChange = {e => setwa1(e.target.value)}/>
                                </div>
                            </div>
                    </div>
                    <div className='myo'>
                        <button className="gooey-button" onClick = {mr}>Calculate</button>
                        <div className='graph'>
                            <Bar
                            data={state1}
                            options={{
                                title:{
                                display:true,
                                fontSize:20
                                },
                            }}
                            />
                        </div>
                    </div>
                    <h4>Maximun Revenue will be generated by {mrc} </h4>
            </div>
            <div className="sep">
            <ColoredLine color="black" />
            </div>
            <div className='my'>
                <div className='h'>
                        <h1>Maximize Water use efficiency?</h1>
                </div>
                <div className='inp'>
                        <div className='card1'>
                            <div className='crop-image'>
                            <img src={crop} />   
                            <p>Select the crops to compare</p>
                            </div>
                            <div className = "crop_details1">
                            <p>
                                <Select
                                onChange={(e) => handleChange2(e)}
                                isMulti
                                options={crops_m}
                                value={crops_m.filter(obj => selectedValue2.includes(obj.value))}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                />
                            
                            </p> 
                            
                            </div>
                        </div> 
                        <div className='card1'>
                            <div className='crop-image'>
                            <img src={drop} />   
                            <p> Water Available(mm)</p>
                            <input type="number" placeholder = "Enter the amount of water " style={{width: "175px"}} onChange = {e => setwa2(e.target.value)}/>
                            </div>
                        </div>
                        <div className='card1'>
                        <h4><u>Advanced/Optional Input</u></h4>
                        <table>
                            <tr>
                            <th>Crop name</th>
                            <th>Input</th>
                            </tr>
                            <tbody>
                            {
                                <tr>
                                
                                </tr>
                            }
                            </tbody>
                        </table>
                            
                    </div>
                </div>
                <div className='myo'>
                    <button className="gooey-button" onClick = {mwe}>Calculate</button>
                    <div className='graph'>
                        <Bar
                        data={state2}
                        options={{
                            title:{
                            display:true,
                            fontSize:20
                            },
                        }}
                        />
                    </div>
                </div>
                <h4>{mwc} maximizes the water use efficiency </h4>
            </div>
            <div className="sep">
            <ColoredLine color="black" />
            </div>
            <div className='ads'>
                <h1><u>Advanced options</u></h1>
                <h4> Run optimization upto 5 crops</h4>
                <p>(Empty/left out inputs will take default values)</p>
                <div className='adsi'>
                    <div className='f1'>
                    <p> Crop 1:</p>
                    <div className='adoc'>
                        <Select 
                        autosize={false}
                        styles={{width: '120px !important'}}
                        onChange={(opt)=>{
                        let val=opt.label;
                        let val1 = opt.value;
                        console.log(opt.label, opt.value)
                        setai1(val)
                        setayv1(val1)
                        }
                        }
                        options ={crops}
                        //onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>
                    <div className='adpn'> <input type="number" placeholder = "Expected yield (tons/ha)" style={{width: "160px"}} onChange = {e => setay1(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "ETm (mm)" style={{width: "100px"}} onChange = {e => setet1(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "Crop cost ($)" style={{width: "100px"}} onChange = {e => setc1(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "Production cost ($)" style={{width: "130px"}} onChange = {e => setpc1(e.target.value)}/></div>
                    </div>
                    <div className='f1'>
                    <p> Crop 2:</p>
                    <div className='adoc'>
                        <Select 
                        onChange={(opt)=>{
                        let val=opt.label;
                        let val1 = opt.value;
                        console.log(opt.label, opt.value)
                        setai2(val)
                        setayv2(val1)
                        }
                        }
                        options ={crops}
                        //onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>
                    <div className='adpn'> <input type="number" placeholder = "Expected yield (tons/ha)" style={{width: "160px"}} onChange = {e => setay2(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "ETm (mm)" style={{width: "100px"}} onChange = {e => setet2(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "Crop cost ($)" style={{width: "100px"}} onChange = {e => setc2(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "Production cost ($)" style={{width: "130px"}} onChange = {e => setpc2(e.target.value)}/></div>
                    </div>
                    <div className='f1'>
                    <p> Crop 3:</p>
                    <div className='adoc'>
                        <Select 
                        onChange={(opt)=>{
                        let val=opt.label;
                        let val1=opt.value;
                        console.log(opt.label, opt.value)
                        setai3(val)
                        setayv3(val1)
                        }
                        }
                        options ={crops}
                        //onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>
                    <div className='adpn'> <input type="number" placeholder = "Expected yield (tons/ha)" style={{width: "160px"}} onChange = {e => setay3(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "ETm (mm)" style={{width: "100px"}} onChange = {e => setet3(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "Crop cost ($)" style={{width: "100px"}} onChange = {e => setc3(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "Production cost ($)" style={{width: "130px"}} onChange = {e => setpc3(e.target.value)}/></div>
                    </div>
                    <div className='f1'>
                    <p> Crop 4:</p>
                    <div className='adoc'>
                        <Select 
                        onChange={(opt)=>{
                        let val=opt.label;
                        let val1=opt.value;
                        console.log(opt.label, opt.value)
                        setai4(val)
                        setayv4(val1)
                        }
                        }
                        options ={crops}
                        //onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>
                    <div className='adpn'> <input type="number" placeholder = "Expected yield (tons/ha)" style={{width: "160px"}} onChange = {e => setay4(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "ETm (mm)" style={{width: "100px"}} onChange = {e => setet4(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "Crop cost ($)" style={{width: "100px"}} onChange = {e => setc4(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "Production cost ($)" style={{width: "130px"}} onChange = {e => setpc4(e.target.value)}/></div>
                    </div>
                    <div className='f1'>
                    <p> Crop 5:</p>
                    <div className='adoc'>
                        <Select 
                        onChange={(opt)=>{
                        let val=opt.label;
                        let val1=opt.value;
                        console.log(opt.label, opt.value)
                        setai5(val)
                        setayv5(val1)
                        }
                        }
                        options ={crops}
                        //onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>
                    <div className='adpn'> <input type="number" placeholder = "Expected yield (tons/ha)" style={{width: "160px"}} onChange = {e => setay5(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "ETm (mm)" style={{width: "100px"}} onChange = {e => setet5(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "Crop cost ($)" style={{width: "100px"}} onChange = {e => setc5(e.target.value)}/></div>
                    <div className='adpn'> <input type="number" placeholder = "Production cost ($)" style={{width: "130px"}} onChange = {e => setpc5(e.target.value)}/></div>
                    </div>
                </div>
                <div>
                    <p><form>
                    <label>Total water available (mm)*:{' '}
                    <input type="number" placeholder = "(mm)" style={{width: "55px"}} onChange = {e => setweca(e.target.value)}/>
                    </label>
                </form></p>
                <p><form>
                    <label>Irrigation efficiency (%):{' '}
                    <input type="number" placeholder = "(mm)" style={{width: "55px"}} onChange = {e => setaie(e.target.value)}/>
                    </label>
                </form></p>
                </div>
                <div>
                    <button className="gooey-button" style = {{marginLeft:"1%" }} onClick = {yap}> Compare Yield </button>
                    <button className="gooey-button" style = {{marginLeft:"1%" }} onClick = {rap}> Compare Profit </button>
                    <button className="gooey-button" style = {{marginLeft:"1%" }} onClick = {mweap}>Compare Water Efficiency</button>
                </div>
                <div className='graph'>
                <Bar
                data={dataap}
                options={{
                    title:{
                    display:true,
                    fontSize:20
                    },
                }}
                />
            </div>
            </div>
        </div>
    )
}

export default Home


// const crops = [{label: "abc", value: 1}]
// crops.forEach(crops)
// array.map()
// array.forEach()