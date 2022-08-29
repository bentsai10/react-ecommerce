import { Component } from "react";
import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss';

class Directory extends Component{
    render(){
        const {categories} = this.props;
        return (
            <div className = "directory-container">
                {categories.map((category) => (
                    <CategoryItem category = {category} id = {category.id}></CategoryItem>
                ))}
      
            </div>);
    }
}

export default Directory;