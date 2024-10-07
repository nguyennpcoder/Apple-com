// AppleStoreDifference.jsx
import React from 'react';
import { TruckOutlined, SwapOutlined, CreditCardOutlined, ShoppingOutlined, SmileOutlined, AppleFilled } from '@ant-design/icons';
import './AppleStoreDifference.css';

const AppleStoreDifference = () => {
    return (
        <div className="apple-store-difference">
            <h2 className='h2a'>
                The Apple Store difference. <span>Even more reasons to shop with us.</span>
            </h2>
            <div className="features">
                <div className="feature">
                    <TruckOutlined className="icon" />
                    <p>Enjoy <strong>two-hour delivery</strong> from an Apple Store, <strong>free delivery</strong> or easy.</p>
                </div>
                <div className="feature">
                    <SwapOutlined className="icon" />
                    <p><strong>Trade in your current device. </strong>Get credit toward a new one.</p>
                </div>
                <div className="feature">
                    <CreditCardOutlined className="icon" />
                    <p>Pay in full or <strong>pay over time</strong>. Your choice.</p>
                </div>
                <div className="feature">
                    <ShoppingOutlined className="icon" />
                    <p>Get a <strong>personalized shopping</strong> experience in the.</p>
                </div>
                <div className="feature">
                    <SmileOutlined className="icon" />
                    <p><strong>Make them yours.</strong> Engrave a mix of emoji, names, and numbers for.</p>
                </div>
                <div className="feature">
                    <AppleFilled className="icon" />
                    <p><strong>Customize</strong> your Mac and create your own style of Apple Watch.</p>
                </div>
            </div>
        </div>
    );
};

export default AppleStoreDifference;