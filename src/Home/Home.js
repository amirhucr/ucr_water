import React from 'react'
import Select from 'react-select';
import crop from './crop.png'
import drop from './drop.png'
import { useState } from 'react';
import "./home.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Bar} from 'react-chartjs-2'; 
import { Chart as ChartJS } from 'chart.js/auto'

const crops =[
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

function Home() {
    const [pa, setPa] = useState(0);
    const [a,seta]    = useState('');
    const [y, sety] = useState('');
    let [lr, setlr] = useState(0);
    const [ie, setie] = useState(100);
    const [c,setc] = useState('');
    const [d,setd] = useState('');
    const [wec,setwa] = useState(null);
    const [wec1,setwa1] = useState(null);
    const [wec2,setwa2] = useState(null);
    const [ans, setans] = useState([]);
    const [ans1, setans1] = useState([]);
    const [ans2, setans2] = useState([]);
    const [cps, setcps] = useState([]);
    const [cpsr, setcpsr] = useState([]);
    const [cpsw, setcpsw] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);
    const [selectedValue1, setSelectedValue1] = useState([]);
    const [selectedValue2, setSelectedValue2] = useState([]);
    const state = {
        labels: cps,
        datasets: [
          {
            label: 'Yield',
            backgroundColor: `#00ff7f`,
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
            label: 'Profit',
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
            label: 'Water efficiency',
            backgroundColor: `#00ffff`,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
            data: ans2
          }
        ]
      }
      const data0 ={
        labels: ['Ya', 'Ym'],
        datasets: [
          {
            axis: 'y',
            barThickness: 10,
            label: 'Ya and Ym',
            backgroundColor: `#1e90ff`,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
            data: [218, 159]
          }
        ]
      }
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
        sety(Ym)
    }
    function clr(){
        if (pa === 0){
            alert("Please enter crop type")
            return
        }
        let eci =0;
        let ecw =0;
        let ETm =0;
        let iw =0;
        if (pa == 1){
            eci = 2;
            ecw = 1.3;
            ETm=1500;
           }
        else if ( pa == 2){
           eci=7;
           ecw= 4.7;
           ETm=1050;
        }
        else if (pa == 3){
           eci=6;
           ecw= 4;
           ETm=620;
        }
        else if (pa == 4){
           eci=6.9;
           ecw= 4.6;
           ETm=1200;
        }
        else if (pa ==5 ){
           eci=4;
           ecw=  2.7;
           ETm=1250;
        }
        else if (pa == 6){
           eci=2.8;
           ecw= 1.9;
           ETm=800;
        }
        else if (pa ==7 ){
            eci=1.3;
            ecw= 1;
            ETm=320;
        }
        else if (pa == 8){
          eci=1;
          ecw= 0.8;
          ETm=600;
        }
        else if (pa == 9){
           eci=2.8;
           ecw= 1.9;
           ETm=350;
        }
        else if (pa == 10){
          eci=1.2;
          ecw=0.9;
          ETm=800;
        }
        else if (pa ==11 ){
           eci=2;
           ecw=1.3;
           ETm=200;
        }
        else if (pa ==12 ){
          eci=1.7;
          ecw= 1.1;
          ETm=600;
        }
        lr = ecw/((5*eci) - ecw)
        iw= (ETm * 100)/((ie)*(1-lr))
        setc((lr*100).toFixed(2))
        setd(iw.toFixed(2))
       }
       const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
      }
      const handleChange1 = (e) => {
        setSelectedValue1(Array.isArray(e) ? e.map(x => x.value) : []);
      }
      const handleChange2 = (e) => {
        setSelectedValue2(Array.isArray(e) ? e.map(x => x.value) : []);
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
            Eta = wec * 68 * (1-(eci/((5*ecw)-eci)))
            Ya = Ym * ((ky*((Eta/ETm)-1))+1)
            // setans([...ans,Ya]);
            ans.push(Ya)
        }
        for(let i =0 ; i<selectedValue.length;i++){
            //cps.push(crops[selectedValue[i]].label)
            setcps(cps => [...cps, crops[selectedValue[i]-1].label])
        }
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
        let pcost = 150;
        let revenue = 0;
        let profit =0 ;
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
            Eta = wec * 68 * (1-(eci/((5*ecw)-eci)))
            Ya = Ym * ((ky*((Eta/ETm)-1))+1)
            revenue = Ya * cost
            profit = revenue - pcost
            ans1.push(profit)
        }
        for(let i =0 ; i<selectedValue1.length;i++){
            //cps.push(crops[selectedValue[i]].label)
            setcpsr(cpsr => [...cpsr, crops[selectedValue1[i]-1].label])
        }
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
            Eta = wec2 * 68 * (1-(eci/((5*ecw)-eci)))
            Ya = Ym * ((ky*((Eta/ETm)-1))+1)
            ans2.push((Ya/wec2))
        }
        for(let i =0 ; i<selectedValue2.length;i++){
            //cps.push(crops[selectedValue[i]].label)
            setcpsw(cpsw => [...cpsw, crops[selectedValue2[i]-1].label])
        }
    }
    function yr(){

    }
  
      
    return (
        <div className='home'>
            <div className='r1'>
                <div className='c0'>
                    <div className='card'>
                            <div className='crop-image'>
                            <img src={crop} />   
                            <p> Crop</p>
                            </div>
                            <div className = "crop_details ">
                            <p className = "input">
                                <Select id="myc"
                                onChange={(opt)=>{
                                let val=opt.value;
                                console.log(opt.label, opt.value)
                                setPa(val)
                                }
                                }
                                options ={crops}
                                />
                            </p> 
                            </div>
                    </div> 
                    <div className = "lr">
                    <h2> Leaching Requirements and Irrigation Water Depth </h2>
                    {pa.myPaVal}
                    <button className="gooey-button" onClick = {clr}>Calculate</button>
                    <div className='cb'>
                    <p>Leaching Requirement:</p>
                    <div className="Default">
                    <CircularProgressbar value={c} text={`${c}%`} />
                    </div>
                    </div>
                    <p>Total crop water requirement(based on ET,LR and IE): {d} mm</p>
                    </div>  

                </div> 
                <div className='c1'> 
                    <div className = "at">
                        <div><h2>Actual ET </h2>
                        {pa .myPaVal}
                        <button className="gooey-button" onClick = {cpot}>Calculate</button>
                        </div>
                        <div className='eto'><p>{a} mm for maximum yield of {y} mm</p></div>
                    </div> 
                    <div className='yr'>
                    <h2>Yield Reduction</h2>
                    <p>(due to salinity build-up)</p>
                    <button className="gooey-button" onClick = {yr}>Calculate</button>
                    <div className='yrgraph'><Bar
                    data={data0}
                    options={{
                        indexAxis: 'y',
                        title:{
                        display:true,
                        fontSize:10
                        },
                    }}
                    /></div>
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
                            <div className='card1'>
                                <div className='crop-image'>
                                <img src={crop} />   
                                <p>Select the crops to compare</p>
                                </div>
                                <div className = "crop_details1">
                                <p>
                                    <Select
                                    onChange={handleChange}
                                    isMulti
                                    options={crops}
                                    value={crops.filter(obj => selectedValue.includes(obj.value))}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    />
                                   
                                </p> 
                                
                                </div>
                            </div> 
                            <div className='card1'>
                                <div className='crop-image'>
                                <img src={drop} />   
                                <p> Water Available</p>
                                <input type="number" placeholder = "Enter the amount of water " style={{width: "175px"}} onChange = {e => setwa(e.target.value)}/>
                                </div>
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
            </div>
            <div className="sep">
            <ColoredLine color="black" />
            </div>
            <div className='my'>
                    <div className='h'>
                            <h1>Maximize Revenue?</h1>
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
                                    onChange={handleChange1}
                                    isMulti
                                    options={crops}
                                    value={crops.filter(obj => selectedValue1.includes(obj.value))}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    />
                                   
                                </p> 
                                
                                </div>
                            </div> 
                            <div className='card1'>
                                <div className='crop-image'>
                                <img src={drop} />   
                                <p> Water Available</p>
                                <input type="number" placeholder = "Enter the amount of water " style={{width: "175px"}} onChange = {e => setwa1(e.target.value)}/>
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
                            onChange={handleChange2}
                            isMulti
                            options={crops}
                            value={crops.filter(obj => selectedValue2.includes(obj.value))}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            />
                           
                        </p> 
                        
                        </div>
                    </div> 
                    <div className='card1'>
                        <div className='crop-image'>
                        <img src={drop} />   
                        <p> Water Available</p>
                        <input type="number" placeholder = "Enter the amount of water " style={{width: "175px"}} onChange = {e => setwa2(e.target.value)}/>
                        </div>
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
    </div>
    </div>
    )
}

export default Home
