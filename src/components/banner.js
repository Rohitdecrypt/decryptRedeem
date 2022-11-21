import Img from './images/ban.png';

function Banner(){
    return(
<div className="banner">

            <div className="container p-3 box mt-4">
                <div className="row gy-4">
                    <div className="col-md-6 box1">
                        <div>
                            <p className="txt m-2">REDEEM</p>
                            <p className="txt2 m-2">Hold the Key</p>
                            <p className="txt3 m-2">The night is dark and full of terrors.What is dead may never die.<br></br>And now his watch is ended.All men must die.</p>
                           
                        </div><br></br>
                       <div className="fbox">
                      <a href='/' style={{textDecoration:"none"}}>  <div className="btn1 p-2 m-2">Buy Now</div></a>
                       <a href='/' style={{textDecoration:"none"}} ><div className="btn2 p-2 m-2">Marketplace</div></a>
                        <a href='/' style={{textDecoration:"none"}}><div className="btn2 p-2 m-2">Redeem Benefits</div></a>
                        </div>
                    </div>
                    
                    <div className="col-md-6 box1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 box2 p-5">
                                    <img src={Img} alt='Image' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
</div>
    )

}

export default Banner;