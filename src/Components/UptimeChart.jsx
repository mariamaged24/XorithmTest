import 'bootstrap/dist/css/bootstrap.min.css';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const UptimeChart = ({ server }) => {
  var uptime = 0
  return (
    <div>
      <div style={{ width: "58rem" }} className="card">
        <div className="card-body">
          <h5 className="card-title">
            {server.name} 
            <Tooltip placement="bottom" title={server.ipAddress}>
                <HelpOutlineIcon style={{fontSize:"small"}}>
                </HelpOutlineIcon>
            </Tooltip>
            </h5>
          <svg preserveAspectRatio="none" height="40" viewBox="0 0 1200 40" >
            {server.uptime90.map((day, index) => (
                <Tooltip placement="bottom" data-html="true" title= {<div style={{whiteSpace:"pre-line"}}>{
                 new Date(new Date().setDate(new Date().getDate() - server.uptime90.length + index)).toLocaleDateString()
                + "\r\nStatus: " + day[0]  
                + "\r\nDowntime Duration: " + day[1] + " minutes"
                + "\r\nResponse Time: " + day[2] + "ms"}</div>}>
                  
                <rect
                key={index}
                height="40"
                width="6"
                x={index * 12}
                y="0.01"
                fill={day[0] === "No Downtime" ? "green" : day[0] === "Degraded" ? "yellow" : "red"}
                role="tab"
              >{uptime = uptime + day[1]}</rect>
              
              </Tooltip>
              
            ))}
             </svg>
             <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="mb-2" style={{textAlign:"left",color:"grey"}}><small></small> 90 days ago</p>

              <p className="mb-2" style={{textAlign:"center",color:"grey"}}><small></small> {(100-((uptime/129600)*100)).toFixed(3)}% Uptime</p>

              <p className="mb-2" style={{textAlign:"right",color:"grey"}}><small></small> Today</p>
             </div>
             
        </div>
      </div>
    </div>
  );
}

export default UptimeChart;
