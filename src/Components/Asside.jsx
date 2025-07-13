
export default function Aside(){

    const formatacao={
        color:'red',
        backgroundColor:'green',
    }
    return(
       <aside>
        <nav style={formatacao}> Menu lateral</nav>
       </aside>
    );
}