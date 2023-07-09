import React ,{ useState,useEffect }from "react";
import { BRAND_APIS, CATEGORY_APIS,PRODUCTS_API } from "../../helper/APIInfo"
import { REQUEST_TYPE } from "../../helper/APIInfo";
import { apiCall } from "../../helper/RequestHandler";
import  Left  from "./../Header/Left"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes
} from "react-router-dom";

function Mobile() {
	const [getProduct, setProduct] = useState();
	useEffect(()=>{
		apiCall(PRODUCTS_API.list,REQUEST_TYPE.POST).then((results)=>{
			setProduct(results.response.data.data)
		})
	},[])


	if(getProduct !=undefined ){
		getProduct.map((index)=>{
			if(index.nestedItem.length > 0){
				index.nestedItem.map((row)=>{
					console.log(row)
				})
			}
		})
	}

	return (
		<>
			<div className="ads-grid py-sm-5 py-4">
				<div className="container py-xl-4 py-lg-2">
					<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
						<span>O</span>ur
						<span>N</span>ew
						<span>P</span>roducts</h3>
					<div className="row">
						<div className="agileinfo-ads-display col-lg-9">
							<div className="wrapper">	
								
								{(getProduct!=undefined) ? getProduct.map((catros)=>( 
								<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4" key={catros.initialItem._id}>
									<h3 className="heading-tittle text-center font-italic">{catros.initialItem.name}</h3>
									<div className="row">
								
										{catros.nestedItem?.map((rows)=>(
										<div className="col-md-4 product-men mt-5">
											<div className="men-pro-item simpleCart_shelfItem">
												<div className="men-thumb-item text-center">
													<div dangerouslySetInnerHTML={{ __html: rows.imageurl }}></div>
											
													<div className="men-cart-pro">
														<div className="inner-men-cart-pro">
															<a href={rows.url} className="link-product-add-cart">Quick View</a>
														</div>
													</div>
												</div>
												<div className="item-info-product text-center border-top mt-4">
													<h4 className="pt-1">
													<a href={rows.url} >{rows.name}</a>
													</h4>
													<div className="info-product-price my-2">
														<span className="item_price">₹{rows.price}</span>
														<del>₹{rows.discount}</del>
													</div>
													<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
														{/* <form action="#" method="post"> */}
															<fieldset>
																<input type="hidden" name="cmd" value="_cart" />
																<input type="hidden" name="add" value="1" />
																<input type="hidden" name="business" value=" " />
																<input type="hidden" name="item_name" value="Samsung Galaxy J7" />
																<input type="hidden" name="amount" value="200.00" />
																<input type="hidden" name="discount_amount" value="1.00" />
																<input type="hidden" name="currency_code" value="USD" />
																<input type="hidden" name="return" value=" " />
																<input type="hidden" name="cancel_return" value=" " />
																<a href={rows.url}><input type="button" name="button" value="Buy" className="button btn" /></a>
															</fieldset>
														{/* </form> */}
													</div>
												</div>
											</div>
										</div>
										))}
										
									</div>
								</div>
								)):""}
								
							</div>
						</div>
						<Left></Left>
					</div>
				</div>
			</div>
		</>
	)

}


export default Mobile