import React from "react";
import { Button } from "react-bootstrap";

export const DeleteButton: React.FC = () => {
    return (
        <Button type="button" variant="danger">
            Удалить из списка
        </Button>
    );
};
