const React = require('react');


function Eventeditor(props) {

    const editdis = props.editdis
    const seteditdis = props.seteditdis
    const submitEvent = props.submitEvent
    const deleteEvent = props.deleteEvent
    const name = props.name
    const desc = props.desc
    const start = props.start
    const end = props.end
    const daystart = props.daystart
    const dayend = props.dayend
    const setname = props.setname
    const setdesc = props.setdesc
    const setstart = props.setstart
    const setend = props.setend
    const setstartday = props.setstartday
    const setendday = props.setendday
    const datetogrid = props.datetogrid
    const gridtodate = props.gridtodate
    const gridtotime = props.gridtotime
    const timetogrid = props.timetogrid
    const strinitdate = props.strinitdate
    const strfinaldate = props.strfinaldate

    return <div className="cal-event-editor" style={{ "display": editdis }}>
        <button className="cal-event-editor-close" onClick={() => { seteditdis("none") }}>❌</button>
        <h1>Event Editor</h1>
        <input type="text" onChange={(e) => setname(e.target.value)} value={name} placeholder="Name"></input>
        <input type="text" onChange={(e) => setdesc(e.target.value)} value={desc} placeholder="Description"></input>
        <input type="date" min={strinitdate} max={strfinaldate} onChange={(e) => setstartday(datetogrid(e.target.value))} value={gridtodate(daystart)} placeholder="Start Day"></input>
        <input type="date" min={strinitdate} max={strfinaldate} onChange={(e) => setendday(datetogrid(e.target.value))} value={gridtodate(dayend)} placeholder="End Day"></input>
        <input type="time" onChange={(e) => setstart(timetogrid(e.target.value))} value={gridtotime(start)} placeholder="Start Time"></input>
        <input type="time" onChange={(e) => setend(timetogrid(e.target.value))} value={gridtotime(end)} placeholder="End Time"></input>
        <button onClick={submitEvent}>Submit</button>
        <button onClick={deleteEvent}>Delete</button>
    </div>
}

export default Eventeditor;