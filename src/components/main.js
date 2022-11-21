

function Main(){
    return(
<div className="main">

<div className="container p-5">
    <div className="row">
        <div className="col-md-12">
            <div className="mtxt pt-4 mb-5" >Master Key Redeemable Benefits</div>

            <div className="mbox3 "><p className="p-0 m-2" style={{paddindTop:"-12px"}}>Select Master Key <i class="fa fa-bars" style={{float:"right",fontSize:"15px",paddingTop:"4px",paddingRight:"10px"}}></i></p></div>
            
            <div className="mbox2 mt-5">
            <div className="mfbox p-1">
               <a href="/"style={{textDecoration:"none"}}> <div class="mbox1 p-1  m-1" style={{fontSize:"10px"}}>UNCLAIMED</div></a>
               <a href="/"style={{textDecoration:"none"}}> <div class="mbox1 p-1 m-1" style={{fontSize:"10px"}}>CLAIMED</div></a>
               <a href="/"style={{textDecoration:"none"}}> <div class="mbox1 p-1 m-1" style={{fontSize:"10px"}}>UPCOMING</div></a>
               <a href="/"style={{textDecoration:"none"}}> <div class="mbox1 p-1 m-1" style={{fontSize:"10px"}}>EXPIRED</div></a>
            </div>    
            </div>
        </div>
    </div>
</div>



</div>
    )

}

export default Main;