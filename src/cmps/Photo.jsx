import '../style.css'


function Photo({ item }){

      return (
      <section key={item._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border:'black solid 5px', margin: '5px', minWidth: '303px', width: '20%', flex: 1}}>
        <img src={'../utilities/cat.webop'} alt={item.name} style={{ maxWidth: '150px', minWidth: '50px' }} />
        <p className=''>{item.name}</p>
        <p className=''>{item.artistName}</p>
        <p className=''>{item.describtion}</p>
      </section>
    );
  };
  
  export default Photo;