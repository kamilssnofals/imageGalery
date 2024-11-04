import { useState } from 'react'

const App = () => {
  const [expanded,setExpanded] = useState(0)


  const handleClick = index => {
		setExpanded(index)
	}

    const panels = [
			{
				image:
					'https://i.pinimg.com/564x/71/87/10/718710ca800cac1614c8b8fad032bda3.jpg',
			},
			{
				image:
					'https://i.pinimg.com/564x/e1/5c/44/e15c44e4c4cd5f83c237cc4ea90afb19.jpg',
			},
			{
				image:
					'https://i.pinimg.com/736x/52/85/cd/5285cd9f10f64a810dcc95152d046128.jpg',
			},
			{
				image:
					'https://i.pinimg.com/736x/82/99/30/8299301f136fe21971ce5ccf794d26db.jpg',
			},
			{
				image:
					'https://i.pinimg.com/736x/25/28/ef/2528ef445b249a3d56824b0c359b3f62.jpg',
			},
			{
				image:
					'https://i.pinimg.com/736x/42/db/53/42db53b44236879445b770bf61e365b1.jpg',
			},
			{
				image:
					'https://i.pinimg.com/736x/5b/0c/6a/5b0c6a9ae27f9b96e810d9410b29d9d3.jpg',
			},
			{
				image:
					'https://i.pinimg.com/736x/bd/99/76/bd9976c21f52db379fc4d35955c48712.jpg',
			},
		]
  return (
		<div className=' w-screen h-screen overflow-hidden '>
			<div
				className='h-full w-full overflow-hidden flex justify-center items-center relative'
				style={{
					backgroundImage: `url(${panels[expanded].image})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className=' inset-0 absolute bg-[rgba(0,0,0,.3)] z-0 backdrop-blur-md'></div>
				<div className='w-[1280px] flex justify-center items-center h-[80vh] gap-2 z-10'>
					{panels.map((panel, index) => (
						<div
							key={index}
							onClick={() => handleClick(index)}
							className={` rounded-2xl bg-black h-full transition-all duration-500 ease-in-out overflow-hidden ${
								expanded === index ? ' w-[60%]' : ' w-[10%]  block'
							}`}
						>
							<img
								src={panel.image}
								alt=''
								className=' w-full h-full object-cover object-top'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default App