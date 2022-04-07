import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container} from "@mui/material";
import {observer} from "mobx-react-lite";


const CategoriesBar = observer( () => {
    const {films} = useContext(Context)
    console.log(films)


    return (
        <Container className={'categories'}>
            <div className="categories__list">
                <Button
                    variant={"contained"}
                    onClick={() => films.setSelectedCategories({})}

                >
                    All
                </Button>
                {films.categories.map(item =>
                    <Button
                        key={item._id}
                        variant={"contained"}
                        onClick={() => films.setSelectedCategories(item)}

                    >
                        {item.name}
                    </Button>
                )}
            </div>

        </Container>
    );
});

export default CategoriesBar;
