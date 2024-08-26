function Profile(){
    const stImg ={borderRadius:'50%'}
    return (
        <div>
            <img style={stImg} src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" />
        </div>
    )
}

function NameJul(){
    
    return (
        <div>
            <p style={{fontSize:'40px',fontWeight:'800',textAlign:'center'}}>Julinene Moore</p>
            <p style={{fontSize:'32px',fontWeight:'800',textAlign:'center',color:'grey'}}>julinene.moore@company.com</p>
        </div>
    )
}

function Follower(){

    return (
        <div style={{display:'flex',justifyContent:'space-evenly',width:'90%'}}>
            <div >
                <p style={{fontSize:'28px',fontWeight:'800',textAlign:'center'}}>25</p>
                <p style={{fontSize:'24px',fontWeight:'800',color:'grey',textAlign:'center'}}>Posts</p>
            </div>
            <div>
                <p style={{fontSize:'28px',fontWeight:'800',textAlign:'center'}}>350</p>
                <p style={{fontSize:'24px',fontWeight:'800',color:'grey',textAlign:'center'}}>Following</p>
            </div>
            <div>
                <p style={{fontSize:'28px',fontWeight:'800',textAlign:'center'}}>1.5K</p>
                <p style={{fontSize:'24px',fontWeight:'800',color:'grey',textAlign:'center'}}>Followers</p>
            </div>
        </div>
    )
}






ReactDOM.createRoot(document.querySelector('#root'))
.render(
    
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center',height:'100vh',marginInline:'15%',border:'1px Solid black',borderRadius:'20px'}}>
        <Profile />
        <NameJul />
        <Follower />
    </div>
)