import { useDispatch, useSelector } from "react-redux";
import {
    addDatePosted,
    addExperienceSelect,
    addJobTypeSelect,
    addSalary,
} from "../../../features/filter/filterSlice";

export default function JobSelect() {
    const { jobList } = useSelector((state) => state.filter);
    const { jobTypeList, datePost, experienceLavel } = useSelector(
        (state) => state.job
    );

    const dispatch = useDispatch();

    // job type handler
    const jobTypeHandler = (e) => {
        dispatch(addJobTypeSelect(e.target.value));
    };

    // date post handler
    const datePostHandler = (e) => {
        dispatch(addDatePosted(e.target.value));
    };

    // experience handler
    const experienceHandler = (e) => {
        dispatch(addExperienceSelect(e.target.value));
    };

    // salary handler
    const salaryHandler = (e) => {
        const data = JSON.parse(e.target.value);
        dispatch(addSalary(data));
    };

    return (
        <>
            <div className="showing-result">
                <div className="top-filters">
                    <div className="form-group">
                        <select
                            onChange={jobTypeHandler}
                            className="chosen-single form-select"
                            value={jobList?.jobTypeSelect}
                        >
                            <option value="">Çalışma Şekli</option>
                            {jobTypeList?.map((item) => (
                                <option value={item.value} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* End job type filter */}

                    <div className="form-group">
                        <select
                            onChange={datePostHandler}
                            className="chosen-single form-select"
                            value={jobList?.datePosted}
                        >   
                            <option value="">Yayınlanma Tarihi</option>
                            {datePost?.map((item) => (
                                <option value={item.value} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* End date posted filter */}

                    <div className="form-group">
                        <select
                            onChange={experienceHandler}
                            className="chosen-single form-select"
                            value={jobList?.experienceSelect}
                        >
                            <option>Deneyim Seviyesi</option>
                            {experienceLavel?.map((item) => (
                                <option value={item.value} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* End ecperience level filter */}

                    {/* End salary estimate filter */}
                </div>
            </div>
        </>
    );
}
