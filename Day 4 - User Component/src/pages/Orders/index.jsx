import React, { useEffect, useState } from 'react';
import { BsFillArchiveFill, BsFillBellFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';

import all_orders from '../../constants/orders';
import { calculateRange, sliceData } from '../../utils/table-pagination';

import CancelIcon from '../../assets/icons/cancel.svg';
import DoneIcon from '../../assets/icons/done.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';
import '../styles.css';

function Orders () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(all_orders, 5));
        setOrders(sliceData(all_orders, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = orders.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setOrders(sliceData(all_orders, new_page, 5));
    }

    return(
        <div>
            <main className='main-container'>
          <div className='main-cards'>
              <div className='card'>
                  <div className='card-inner'>
                      <h3>Total Inquiries</h3>
                      <BsFillArchiveFill className='card_icon'/>
                  </div>
                  <h1>300</h1>
              </div>
              <div className='card'>
                  <div className='card-inner'>
                      <h3>Total Responded</h3>
                      <BsFillGrid3X3GapFill className='card_icon'/>
                  </div>
                  <h1>12</h1>
              </div>
              <div className='card'>
                  <div className='card-inner'>
                      <h3>Total Not Responded</h3>
                      <BsPeopleFill className='card_icon'/>
                  </div>
                  <h1>33</h1>
              </div>
              <div className='card'>
                  <div className='card-inner'>
                      <h3>ALERTS</h3>
                      <BsFillBellFill className='card_icon'/>
                  </div>
                  <h1>42</h1>
              </div>
          </div>

      </main>
        <div className='dashboard-content'>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Inquiries</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                        <th>STUDENT</th>
                        <th>SUBJECT</th>
                        <th>DEPARTMENT</th>
                    </thead>

                    {orders.length !== 0 ?
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td><span>{order.id}</span></td>
                                    <td><span>{order.date}</span></td>
                                    <td>
                                        <div>
                                            {order.status === 'Paid' ?
                                                <img
                                                    src={DoneIcon}
                                                    alt='paid-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Cancelled' ?
                                                <img
                                                    src={CancelIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Refunded' ?
                                                <img
                                                    src={RefundedIcon}
                                                    alt='refunded-icon'
                                                    className='dashboard-content-icon' />
                                            : null}
                                            <span>{order.status}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <img 
                                                src={order.avatar}
                                                className='dashboard-content-avatar'
                                                alt={order.first_name + ' ' +order.last_name} />
                                            <span>{order.first_name} {order.last_name}</span>
                                        </div>
                                    </td>
                                    <td><span>{order.product}</span></td>
                                    <td><span>${order.price}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {orders.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
        </div>
    )
}

export default Orders;