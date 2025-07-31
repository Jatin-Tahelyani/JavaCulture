import React from 'react';
import './styles.css';
import latteImg from './images/iced_churro_latte.png';

export default function Card() {
    const openCoffeeModal = (title, desc, price) => {
        document.getElementById("modalCoffeeImage").src = latteImg;
        document.getElementById("modalCoffeeTitle").innerText = title;
        document.getElementById("modalCoffeeDesc").innerText = desc;
        document.getElementById("modalCoffeePrice").innerText = price;
    };

    return (
        <>
             <div className="row card1 h-100" onClick={() =>
                            openCoffeeModal(
                                'Iced Churro Latte',
                                'Signature Starbucks Latte paired with flavours of churro with a hint of cinnamon. Served over ice',
                                '₹210.00'
                            )
                        } >
                <div className="col-md-3">
                    <img
                        src={latteImg}
                        alt="Iced Churro Latte"
                        className="card-img"
                        style={{ cursor: 'pointer' }}
                        data-bs-toggle="modal"
                        data-bs-target="#coffeeModal"
                    />
                </div>
                <div className="col-md-9 d-flex flex-column justify-content-between">
                    <div>
                        <p className="card-title">Iced Churro Latte</p>
                        <p className="card-desc">
                            Signature Starbucks Latte paired with flavours of churro with a hint of cinnamon. Served over ice
                        </p>
                    </div>
                    <div className="d-flex gap-4 mt-3 align-items-center">
                        <p className="card-title my-2">₹210.00</p>
                        <button className="card-btn">Add Item</button>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="coffeeModal" tabIndex="-1" aria-labelledby="coffeeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content rounded-4 shadow-lg">
                        <div className="modal-body d-flex flex-column flex-md-row">
                            <div className="col-md-5 d-flex justify-content-center align-items-center">
                                <img id="modalCoffeeImage" src="" alt="Coffee" className="img-fluid rounded" style={{ maxHeight: '300px' }} />
                            </div>
                            <div className="col-md-7 ps-md-4 pt-4 pt-md-0">
                                <h4 id="modalCoffeeTitle" className="fw-bold">Coffee Name</h4>
                                <p id="modalCoffeeDesc" className="text-muted mb-3">Coffee Description</p>
                                <p id="modalCoffeePrice" className="fs-5 fw-semibold text-dark">₹000.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
