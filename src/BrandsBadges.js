import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';




function BrandsBadges() {

  const { theme } = useContext(ThemeContext);

  const headerStyle = theme ? "white" : "black"

  const badgeStyle = theme ? "secondary" : "success"

  // add hover css and click css

  return (
    <div className="brandsBadges">
      <br></br>
      <br></br>
      <br></br>
        <h2 style={{"color":headerStyle}}>Popular Brands</h2>
        <br></br>
        <div className="brandsGrid">

          <Badge className={`badge bg-${badgeStyle}`} style={{width:"250px", height:"200px"}}> 
          Sneakers 
          <div>
            <br></br>
            <br></br>

              <section className="boxes container">
                <article className="box box1"><img src="https://i.etsystatic.com/33329294/r/il/727f47/3627737931/il_1588xN.3627737931_eicj.jpg"/></article>
                <article className="box box2"><img src="https://www.teahub.io/photos/full/60-604761_logo-wallpaper-nike.jpg"/></article>
                <article className="box box3"><img src="https://cutewallpaper.org/21/cool-adidas-logos/Adidas-Logo-Cool-Adidas-Logo-Png,-Cliparts-and-Cartoons-.png"/></article>
                <article className="box box4"><img src="https://images.squarespace-cdn.com/content/v1/56bf6652cf80a19cf8e45613/1529488355915-4U28P7EPV56TOHX0LCJ0/NB.jpg?format=1500w"/></article>
              </section>

          
            </div>
          </Badge>

          <Badge className={`badge bg-${badgeStyle}`} style={{width:"250px", height:"200px"}}> 
          Apparel 
          <div>
            <br></br>
            <br></br>

              <section className="boxes container">
                <article className="box box1"><img src="https://media.gq.com/photos/5a86862d642a6a20fc1f42c4/master/w_2000,h_1500,c_limit/DVN059-GQ-Ronnie-Fieg-Kith-2-14-18-033.jpg"/></article>
                <article className="box box2"><img src="https://t3.ftcdn.net/jpg/03/57/57/22/360_F_357572266_YM1ntXNshms5z9RHMB3ycEpE15y1uCcI.jpg"/></article>
                <article className="box box3"><img src="https://i.pinimg.com/736x/61/39/39/613939d08f70febbae70724eca9981a7.jpg"/></article>
                <article className="box box1"><img src="https://i.pinimg.com/originals/99/09/ee/9909eef41d57f7619ca5f865600f9ed7.jpg"/></article>
                <article className="box box2"><img src="https://i.etsystatic.com/26485136/r/il/fe1747/3332408672/il_1588xN.3332408672_jsws.jpg"/></article>
                <article className="box box3"><img src="https://vlone.llc/wp-content/uploads/2021/04/Screenshot_63.jpg"/></article>
              </section>

          
            </div>
          </Badge>

          <Badge className={`badge bg-${badgeStyle}`} style={{width:"250px", height:"200px"}}> 
          Electronics 
          <div>
            <br></br>
            <br></br>

              <section className="boxes container">
                <article className="box box1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEsBfFKp4pT_o7k4Rle0u2DqOMDIQl18AMw&usqp=CAU"/></article>
                <article className="box box2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwdwbKiq8USc6kpaSGeR-SGLeVGMMq3BtjFObEwwKHeSG1m7oVxFdq7915-DPaJ7JQdI&usqp=CAU"/></article>
                <article className="box box3"><img src="https://media.idownloadblog.com/wp-content/uploads/2016/08/papers.co-ng07-apple-logo-blue-dark-40-wallpaper.jpg"/></article>
              </section>
              
          
            </div>
          </Badge>

        </div>
        <br></br>
        <br></br>

    </div>
  );
}
  


export default BrandsBadges;
