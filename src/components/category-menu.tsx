export default function CategoryMenu (props:any) {

    
    
    return (
        <ul className='text-orange-400 text-center text-lg w-full'>
            <li className='py-2 hover:bg-slate-600 rounded-lg'><button onClick={ (event)=>{
                event.preventDefault();
                props.setGenre("스릴러");
        }}>스릴러</button></li>
            <li className='py-2 hover:bg-slate-600 rounded-lg'><button onClick={(event)=>{
                event.preventDefault();
                props.setGenre("로맨스");
        }}>로맨스</button></li>
            <li className='py-2 hover:bg-slate-600 rounded-lg'><button onClick={(event)=>{
                event.preventDefault();
                props.setGenre("코믹");
        }}>코믹</button></li>
            <li className='py-2 hover:bg-slate-600 rounded-lg'><button onClick={(event)=>{
                event.preventDefault();
                props.setGenre("액션");
        }}>액션</button></li>
        </ul>
    )
}