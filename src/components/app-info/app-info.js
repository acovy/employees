import "./app-info.css";

const AppInfo = ({incresed, employees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников компании Hatber</h1>
            <h2>Общее число сотруников: {employees}</h2>
            <h2>Премию получат: {incresed}</h2>
        </div>
    )
};

export default AppInfo;