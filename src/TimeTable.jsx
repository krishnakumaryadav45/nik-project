import * as React from "react";
class TimeTable extends React.Component {
    render() {
        return (
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>RK UNIVERSITY</h1>
      <h2 style={{ textAlign: "center" }}>SCHOOL OF ENGINEERING</h2>
      <h3 style={{ textAlign: "center" }}>6ECE+ITC</h3>
      <h4 style={{ textAlign: "center" }}>W.E.F: 17/12/2024</h4>
      <p>
        <strong>Class Counselor:</strong> Prof. Chhaya Patel
      </p>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10:00 TO 10:50</td>
            <td>.NET (BD) / ADV. JAVA (MV)</td>
            <td>.NET (PJT) / ADV. JAVA (Lib)</td>
            <td>AI/ML (CP)</td>
            <td>React (NV)</td>
            <td>React (SMS)</td>
          </tr>
          <tr>
            <td>10:50 TO 11:40</td>
            <td>.NET (BD) / ADV. JAVA (MV)</td>
            <td>.NET (PJT) / ADV. JAVA (Lib)</td>
            <td>AI/ML (CP)</td>
            <td>React (NV)</td>
            <td>React (SMS)</td>
          </tr>
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              TEA BREAK
            </td>
          </tr>
          <tr>
            <td>12:30 TO 1:20</td>
            <td>PD (Lib) / DM (OD) / EC (RKI)</td>
            <td>AI/ML (CS)</td>
            <td>PD (Lib) / DM (OD) / EC (RKI)</td>
            <td>PD (DS) / DM (Lib) / EC (Lib)</td>
            <td>PD (DS) / DM (Lib) / EC (Lib)</td>
          </tr>
          <tr>
            <td>1:20 TO 2:10</td>
            <td>PD (Lib) / DM (OD) / EC (RKI)</td>
            <td>TOC (AKK)</td>
            <td>PD (Lib) / DM (OD) / EC (RKI)</td>
            <td>PD (DS) / DM (Lib) / EC (Lib)</td>
            <td>PD (DS) / DM (Lib) / EC (Lib)</td>
          </tr>
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              LUNCH BREAK
            </td>
          </tr>
          <tr>
            <td>2:25 TO 3:15</td>
            <td>TOC (AKK)</td>
            <td>React (NV)</td>
            <td>.NET (BD) / ADV. JAVA (NC)</td>
            <td>ADV. JAVA (NC)</td>
            <td>AI/ML (CP)</td>
          </tr>
          <tr>
            <td>3:15 TO 4:05</td>
            <td>TOC (AKK)</td>
            <td>React (NV)</td>
            <td>.NET (BD) / ADV. JAVA (NC)</td>
            <td>ADV. JAVA (NC)</td>
            <td>AI/ML (CP)</td>
          </tr>
        </tbody>
      </table>
      <h3>Class / Lab Locations:</h3>
      <ul>
        <li>LL2 / LL6</li>
        <li>214 / Elec. Machine Lab</li>
        <li>201, LL5, 118</li>
      </ul>
      <h3>Abbreviations:</h3>
      <table
        border="1"
        cellPadding="5"
        cellSpacing="0"
        style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Abbreviation</th>
            <th>Subject Name and Code</th>
            <th>Faculty Abbreviation</th>
            <th>Faculty Name</th>
            <th>TH/TU</th>
            <th>PR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ToC</td>
            <td>Theory of Computation (CE631)</td>
            <td>AKK</td>
            <td>Prof. Anuja Kakkad</td>
            <td>3</td>
            <td>2</td>
          </tr>
          <tr>
            <td>AI/ML</td>
            <td>Artificial Intelligence and Machine Learning (CE628)</td>
            <td>CS</td>
            <td>Prof. Chetan Shingadiya</td>
            <td>3</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ADV. JAVA</td>
            <td>Advance JAVA (CE691)</td>
            <td>NV</td>
            <td>Prof. Nikunj Vadher</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>.NET</td>
            <td>Web Application Development using ASP.NET (CE727)</td>
            <td>PJT</td>
            <td>Prof. Paresh Tanna</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>React</td>
            <td>Full Stack Web Development (CE636)</td>
            <td>SMS</td>
            <td>Prof. Nikunj Vadher</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PD</td>
            <td>Product Design (ME524)</td>
            <td>DS</td>
            <td>Prof. Deep Sanghani</td>
            <td>3</td>
            <td>2</td>
          </tr>
          <tr>
            <td>DM</td>
            <td>Disaster Management (SE6004)</td>
            <td>OD</td>
            <td>Prof. Omkar Dabhi</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>EC</td>
            <td>Sustainable Development (SE6005)</td>
            <td>RKI</td>
            <td>Dr. Riaz Israni</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
        );
    }
}

export default TimeTable;