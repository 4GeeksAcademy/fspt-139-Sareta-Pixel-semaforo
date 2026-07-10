import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [shineColor, setShineColor] = useState("roja")
	const [violetaVisible, setVioletaVisible] = useState(false)
	console.log(setShineColor)

	return (
		<div className="principal">

			<div className="brazo-horizontal">
				<div className="tallo">
					<div className="semaforo"

					>
						<div className={shineColor === "roja" ? "luz roja activa" : "luz roja"} onClick={() => setShineColor("roja")}></div>
						<div className={shineColor === "amarilla" ? "luz amarilla activa" : "luz amarilla"} onClick={() => setShineColor("amarilla")}></div>
						<div className={shineColor === "verde" ? "luz verde activa" : "luz verde"} onClick={() => setShineColor("verde")}></div>
						{
							violetaVisible && (
								<div className={shineColor === "violeta" ? "luz violeta activa" : "luz violeta"} ></div>
							)
						}
					</div>
				</div>
			</div>

			<div className="poste-vertical">
				<div className="boton-peaton">
					<div className="btn "
					 onClick={() => {  setVioletaVisible(!violetaVisible)
						setShineColor("violeta")
					} }></div>
					<div className="btn uno" 
					onClick={() => setShineColor(shineColor === "roja" ? "amarilla" : shineColor === "amarilla" ? "verde" : "roja")} ></div>
				</div>
			
			</div>

		</div>
	);
};

export default Home;