import React from "react";
import { Badge } from "react-bootstrap";

interface IRatingMovie {
    average: number;
}
export const RatingMovie: React.FC<IRatingMovie> = ({ average }) => {
    return (
        <div className="d-flex align-items-center ">
            <Badge pill bg="primary">
                Средняя оценка - {average}
            </Badge>
        </div>
    );
};
