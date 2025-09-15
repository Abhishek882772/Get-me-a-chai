"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { savePayment } from '@/actions/useractions'

const Paymentpage = ({ username }) => {
    const [paymentform, setpaymentform] = useState({
  name: "",
  message: "",
  amount: "",
  email: "",
  to: "",
  method: ""
})


    const handleChange = (e) => {
        setpaymentform({
            ...paymentform,
            [e.target.name]: e.target.value,
        });
    };

    const pay = async () => {
        try {
            const res = await savePayment(username, paymentform);
            if (res.success) {
                alert("✅ Payment details saved successfully!");
                setpaymentform({ name: "", message: "", amount: "" }); // clear form
            } else {
                alert("❌ Failed to save payment: " + res.error);
            }
        } catch (err) {
            console.error(err);
            alert("❌ Something went wrong");
        }
    };

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            {username}
            <div className="cover w-full relative">
                <img
                    className="object-cover w-full h-[350px]"
                    src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/10980356/56bf028c3bc741af82292c4f97dbf150/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/4.jpeg?token-hash=cLT3706-lzCnLR7wE5WbJbOtpdEgBiP3Oy0Z3AeposQ%3D&token-time=1759536000"
                    alt="image"
                />
                <div className="absolute left-[46vw] top-[45vh] rounded-3xl border-1 border-white overflow-hidden">
                    <img
                        className="w-[8vw] h-[8vw] "
                        src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/10980356/f363261197b3431b90e19436889972f8/eyJoIjozNjAsInciOjM2MH0%3D/2.png?token-hash=ZeIjFxaZBwascDGug8JVq9nM_qrFN0lI42BcFQFuetY%3D&token-time=1758412800"
                        alt=""
                    />
                </div>
            </div>

            <div className="info flex justify-center items-center my-15 flex-col gap-2">
                <div className="text-xl font-bold mx-3">@{username}</div>
                <div className="text-gray-500">Creating Inspiring Adventure Videos</div>
                <div className="text-gray-500">258 members . 319 posts</div>

                {/* Supporters + Membership */}
                <div className="payment flex gap-3 my-3 w-[80vw]">
                    <div className="supporters w-1/2 p-5 rounded-xl bg-radial-[at_25%_25%] from-zinc-700 to-black to-80% ">
                        <h2 className="text-lg font-bold text-center my-1.5">Supporters</h2>
                        <ul className="gap-12">
                            <li className="flex"><img className="w-6 m-2" src="user.gif" alt="user" />subham Donated <b>&nbsp; $20 &nbsp;</b> with a message "Great content!"</li>
                            <li className="flex"><img className="w-6 m-2" src="user.gif" alt="user" />Ravi Donated <b>&nbsp; $70 &nbsp;</b> with a message "Love form India!"</li>
                            <li className="flex"><img className="w-6 m-2" src="user.gif" alt="user" />Atul Donated <b>&nbsp; $10 &nbsp;</b> with a message "Love You bro :)"</li>
                        </ul>
                    </div>

                    <div className="supporters w-1/2 p-5 rounded-xl bg-radial-[at_25%_25%] from-zinc-700 to-black to-80% ">
                        <h2 className="text-lg font-bold text-center my-1.5">
                            Become a Member
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center border-2 border-gray-500 p-3 rounded-lg">
                                <div>
                                    <h3 className="font-bold text-lg">$5</h3>
                                    <p className="text-sm text-gray-400">Per month</p>
                                    <p className="text-sm text-gray-400">
                                        Access to exclusive posts
                                    </p>
                                </div>
                                <button
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                                    onClick={() => alert("You joined the channel")}
                                >
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Form */}
                <div className="max-w-md mx-auto p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md w-full">
                    <h2 className="text-xl font-bold mb-4 text-center text-white">
                        Make a Payment
                    </h2>

                    <form className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm text-white">Name</label>
                            <input
                                name='name'
                                onChange={handleChange}
                                value={paymentform.name}
                                type="text"
                                className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm text-white">Message</label>
                            <textarea
                                name='message'
                                onChange={handleChange}
                                value={paymentform.message}
                                className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter a message (optional)"
                                rows="3"
                            ></textarea>
                        </div>

                        {/* Amount */}
                        <div>
                            <label className="block text-sm text-white">Amount ($)</label>
                            <input
                                name='amount'
                                value={paymentform.amount}
                                onChange={handleChange}
                                type="number"
                                className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter amount"
                                required
                            />
                        </div>

                        {/* Suggested Amounts */}
                        <div className="flex gap-2">
                            <button type="button" className="flex-1 p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                                onClick={() => setpaymentform({ ...paymentform, amount: 5 })}>₹5</button>
                            <button type="button" className="flex-1 p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition" onClick={() => setpaymentform({ ...paymentform, amount: 10 })}>₹10</button>
                            <button type="button" className="flex-1 p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition" onClick={() => setpaymentform({ ...paymentform, amount: 20 })}>₹20</button>
                        </div>

                          <div>
                            <label className="block text-sm text-white">Email</label>
                            <input
                                name="email"
                                value={paymentform.email}
                                onChange={handleChange}
                                type="email"
                                className="w-full p-2 rounded-lg bg-white/20 text-white"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-white">To</label>
                            <input
                                name="to"
                                value={paymentform.to}
                                onChange={handleChange}
                                type="text"
                                className="w-full p-2 rounded-lg bg-white/20 text-white"
                                placeholder="Enter recipient username"
                                required
                            />
                        </div>

                        {/* Payment Option */}
                        <div>
                            <label className="block text-sm text-white">Payment Method</label>
                            <select className="w-full p-2 rounded-lg bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500" required defaultValue="">
                                <option value="" disabled>Select method</option>
                                <option value="credit-card">Credit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="upi">UPI</option>
                            </select>
                        </div>

                        {/* Submit */}
                        <button
                            type="button"
                            className="w-full py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                            onClick={pay}
                        >
                            Pay
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Paymentpage
