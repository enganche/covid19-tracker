import React, { useEffect } from 'react';

/*
@<param> props: lấy props từ component <Display />
@<return> biểu đồ thống kê (hiện tại không chính xác)
*/

function ProgressBar(props) {

    /*Tạo progress bar
    nhưng cái này nhìn đểu quá
    chắc xóa*/

    function progress() {

        const total = props.cases;
        const recovered = props.recoveredCases;
        const dead = props.deadCases;
        const recoveredBar = document.querySelector('.recover');
        const deadBar = document.querySelector('.dead');

        recoveredBar.style.width = parseInt(recovered / total * 100) + '%';
        deadBar.style.width = parseInt(dead / total * 100) + '%';
    }

    useEffect(() => {
        progress();
    })

    return (
        <div>
            <div className="bar" align="left">
                <span id="progress" className="recover"></span>
                <span id="progress" className="dead"></span>
            </div>
            <div className="info" align="center">
                <p><i className="icon blue"></i>Hồi phục</p>
                <p><i className="icon red"></i>Tử vong</p>
                <p><i className="icon white"></i>Đang điều trị</p>
            </div>
        </div>
    );
}

export default ProgressBar;