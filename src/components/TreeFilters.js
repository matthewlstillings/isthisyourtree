import React from 'react';
import { connect } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {setCommonFilter, setLatinFilter, setTypeFilter, 
        setVenationFilter, setArrangementFilter, setLobingFilter,
        setTextureFilter, setShapeFilter, setDryFilter, setFleshyFilter,
        setOtherFilter, setMarginsFilter, clearFilter} from '../actions/filters';



export class TreeFilters extends React.Component {
    expandForm = (e) => {
        const arrow = e.target.parentNode.getElementsByClassName('chevron')[0];
        arrow.classList.toggle('active');
        //Collapsible
        const collapsible = e.target.parentNode.parentNode.getElementsByClassName("filters__input")[0];
        collapsible.classList.toggle("active");
    }
    clearRadios = () => {
        let total = 0;
        const radio = document.querySelectorAll('input[type="radio"]');
        for (var i = 0, l = radio.length; l > i; i++) {
            if (radio[1].checked) {
                total+= +radios[i].value;
            }
            console.log('doop');
        }
    }
    render() {
        return (
            <form className="filters">
                <p className="filters__description">Use these tree properties to find your tree!</p>
                <div className="filters__names__container">
                    <div className="styled-select"
                                onClick={this.expandForm}
                            >
                                <h2>Names</h2>
                    </div> 
                    <div className="filters__input-container is-names__container">
                        <input type="text" name="commonName" placeholder="Common Name" 
                            onChange={(e)=>{
                                this.props.setCommonFilter(e.target.value)
                            }}
                            className="filters__names-input"
                        />
                        <input type="text" name="latinName" placeholder="Latin Name" 
                            onChange={(e)=>{
                                this.props.setLatinFilter(e.target.value)
                            }}
                            className="filters__names-input"
                        />
                    </div>
                </div>

                
                        {/* For Leaf and Fruit Filters */}
                <div className="filters__leaves-container">
                    <div className="filters__input__container">
                        <div className="filters__form">
                            <div className="styled-select first-select"
                                onClick={this.expandForm}
                            >
                                <h2>Type</h2>
                                <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
                            </div>     
                            <div 
                                name="type"
                                onChange={(e)=>{
                                    this.props.setTypeFilter(e.target.value)
                                }}
                                className="filters__input"
                            >
                                <div className="filter"><input name="type" type="radio" value="simple" id="simple"/><label htmlFor="simple">Simple</label></div>
                                <div className="filter"><input name="type" type="radio" value="compound" id="compound"/><label htmlFor="compound">Compound</label></div>
                                <div className="filter"><input name="type" type="radio" value="bicompound" id="bicompound"/><label htmlFor="bicompound">Bicompound</label></div>
                                <div className="filter"><input name="type" type="radio" value="trifoliate" id="trifoliate"/><label htmlFor="trifoliate">Trifoliate</label></div>
                            </div>
                        </div>
                        <div className="filters__form">  
                            <div className="styled-select"
                                onClick={this.expandForm}
                            >
                                <h2>Venation</h2>
                                <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
                            </div>  
                            <div 
                                name="venation"
                                onChange={(e)=>{
                                    this.props.setVenationFilter(e.target.value)
                                }}
                                className="filters__input"
                            >
                                <div className="filter"><input type="radio" name="venation" id="arcuate" value="arcuate"/><label htmlFor="arcuate">Arcuate</label></div>
                                <div className="filter"><input type="radio" name="venation" id="palmate" value="palmate"/><label htmlFor="palmate">Palmate</label></div>
                                <div className="filter"><input type="radio" name="venation" id="parallel" value="parallel"/><label htmlFor="parallel">Parallel</label></div>
                                <div className="filter"><input type="radio" name="venation" id="pinnate" value="pinnate"/><label htmlFor="pinnate">Pinnate</label></div>
                            </div>
                        </div>
                        <div className="filters__form">
                            <div className="styled-select"
                                onClick={this.expandForm}
                            >
                                <h2>Arrangement</h2>
                                <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
                            </div> 
                            <div
                                name="arrangement"
                                onChange={(e)=>{
                                    this.props.setArrangementFilter(e.target.value)
                                }}
                                className="filters__input"
                            >
                                <div className="filter"><input type="radio" name="arrangement" id="opposite" value="opposite"/><label htmlFor="opposite">Opposite</label></div>
                                <div className="filter"><input type="radio" name="arrangement" id="subopposite" value="subopposite"/><label htmlFor="subopposite">Sub-Opposite</label></div>
                                <div className="filter"><input type="radio" name="arrangement" id="alternate" value="alternate"/><label htmlFor="alternate">Alternate</label></div>
                                <div className="filter"><input type="radio" name="arrangement" id="whorled" value="whorled"/><label htmlFor="whorled">Whorled</label></div>
                            </div>
                        </div>
                        <div className="filters__form">
                            <div className="styled-select"
                                onClick={this.expandForm}
                            >
                                <h2>Margins</h2>
                                <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
                            </div> 
                            <div 
                                name="margins"
                                onChange={(e)=>{
                                    this.props.setMarginsFilter(e.target.value)
                                }}
                                className="filters__input"
                            >
                                <div className="filter"><input type="radio" name="margins" id="entire" value="entire"/><label htmlFor="entire">Entire</label></div>
                                <div className="filter"><input type="radio" name="margins" id="serrate" value="serrate"/><label htmlFor="serrate">Serrate</label></div>
                                <div className="filter"><input type="radio" name="margins" id="dentate" value="dentate"/><label htmlFor="dentate">Dentate</label></div>
                                <div className="filter"><input type="radio" name="margins" id="toothed" value="toothed"/><label htmlFor="toothed">Toothed</label></div>
                                <div className="filter"><input type="radio" name="margins" id="spiny" value="spiny"/><label htmlFor="spiny">Spiny</label></div>
                                <div className="filter"><input type="radio" name="margins" id="doublySerrate" value="doublySerrate"/><label htmlFor="doublySerrate">Doubly Serrate</label></div>
                            </div>
                        </div>
                        <div className="filters__form">
                            <div className="styled-select"
                                onClick={this.expandForm}
                            >
                                <h2>Shape</h2>
                                <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
                            </div> 
                            <div 
                                name="shape"
                                onChange={(e)=>{
                                    this.props.setShapeFilter(e.target.value)
                                }}
                                className="filters__input"
                            >
                                <div className="filter"><input type="radio" name="shape" id="spoon" value="spoon"/><label htmlFor="spoon">Spoon</label></div>
                                <div className="filter"><input type="radio" name="shape" id="lobed" value="lobed"/><label htmlFor="lobed">Lobed</label></div>
                                <div className="filter"><input type="radio" name="shape" id="cordate" value="cordate"/><label htmlFor="cordate">Cordate</label></div>
                                <div className="filter"><input type="radio" name="shape" id="linear" value="linear"/><label htmlFor="linear">Linear</label></div>
                                <div className="filter"><input type="radio" name="shape" id="needle" value="needle"/><label htmlFor="needle">Needle</label></div>
                                <div className="filter"><input type="radio" name="shape" id="elliptic" value="elliptic"/><label htmlFor="elliptic">Elliptic</label></div>
                                <div className="filter"><input type="radio" name="shape" id="lanceolate" value="lanceolate"/><label htmlFor="lanceolate">Lanceolate</label></div>
                            </div>
                        </div>
                        <div className="filters__form">
                            <div className="styled-select"
                                onClick={this.expandForm}
                            >
                                <h2>Lobing</h2>
                                <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
                            </div> 
                            <div 
                                name="lobing"
                                onChange={(e)=>{
                                    this.props.setLobingFilter(e.target.value)
                                }}
                                className="filters__input"
                            >
                                <div className="filter"><input type="radio" name="lobing" id="pinnately" value="pinnately"/><label htmlFor="pinnately">Pinnately</label></div>
                                <div className="filter"><input type="radio" name="lobing" id="palmately" value="palmately"/><label htmlFor="palmately">Palmately</label></div>
                                <div className="filter"><input type="radio" name="lobing" id="irregularly" value="irregular"/><label htmlFor="irregularly">Irregularly</label></div>
                            </div>
                        </div>
                        <div className="filters__form">
                            <div className="styled-select"
                                onClick={this.expandForm}
                            >
                                <h2>Texture</h2>
                                <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
                            </div> 
                                <div 
                                    name="texture"
                                    onChange={(e)=>{
                                        this.props.setTextureFilter(e.target.value)
                                    }}
                                    className="filters__input"
                                >
                                    <div className="filter"><input type="radio" name="texture" id="rough" value="rough"/><label htmlFor="rough">Rough</label></div>
                                    <div className="filter"><input type="radio" name="texture" id="smooth" value="smooth"/><label htmlFor="smooth">Smooth</label></div>
                                    <div className="filter"><input type="radio" name="texture" id="hairy" value="hairy"/><label htmlFor="hairy">Hairy</label></div>
                                </div>
                        </div>
                        </div>
                    </div>

                    <div className="filters__fruits-container">
                        <div className="filters__input__container">

                            <div className="filters__form">
                                <div className="styled-select"
                                    onClick={this.expandForm}
                                >
                                    <h2>Dry Fruits</h2>
                                    <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
                                </div> 
                                <div 
                                    name="dryFruits"
                                    onChange={(e)=>{
                                        this.props.setDryFilter(e.target.value)
                                    }}
                                    className="filters__input"
                                >
                                    <div className="filter"><input type="radio" name="dryFruits" id="achene" value="achene"/><label htmlFor="achene">Achene</label></div>
                                    <div className="filter"><input type="radio" name="dryFruits" id="capsule" value="capsule"/><label htmlFor="capsule">Capsule</label></div>
                                    <div className="filter"><input type="radio" name="dryFruits" id="caryopse" value="caryopse"/><label htmlFor="caryopse">Caryopse</label></div>
                                    <div className="filter"><input type="radio" name="other" id="cone" value="cone"/><label htmlFor="cone">Cone</label></div>
                                    <div className="filter"><input type="radio" name="dryFruits" id="follicle" value="follicle"/><label htmlFor="follicle">Follicle</label></div>
                                    <div className="filter"><input type="radio" name="dryFruits" id="legume" value="legume"/><label htmlFor="legume">Legume</label></div>
                                    <div className="filter"><input type="radio" name="dryFruits" id="nut" value="nut"/><label htmlFor="nut">Nut</label></div>
                                    <div className="filter"><input type="radio" name="dryFruits" id="samara" value="samara"/><label htmlFor="samara">Samara</label></div>
                                    <div className="filter"><input type="radio" name="dryFruits" id="schizocarp" value="schizocarp"/><label htmlFor="schizocarp">Schizocarp</label></div>
                                </div>
                            </div>

                            <div className="filters__form">
                                <div className="styled-select"
                                    onClick={this.expandForm}
                                >
                                    <h2>Fleshy Fruits</h2>
                                    <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
                                </div> 
                                <div 
                                    name="fleshyFruits"
                                    onChange={(e)=>{
                                        this.props.setFleshyFilter(e.target.value)
                                    }} 
                                    className="filters__input"                    
                                >
                                    <div className="filter"><input type="radio" name="fleshyFruits" id="berry" value="berry"/><label htmlFor="berry">Berry</label></div>
                                    <div className="filter"><input type="radio" name="fleshyFruits" id="drupe" value="drupe"/><label htmlFor="drupe">Drupe</label></div>
                                    <div className="filter"><input type="radio" name="fleshyFruits" id="pepo" value="pepo"/><label htmlFor="pepo">Pepo</label></div>
                                    <div className="filter"><input type="radio" name="fleshyFruits" id="pomes" value="pomes"/><label htmlFor="pomes">Pomes</label></div>
                                </div>
                            </div>

                            <div className="filters__form">
                                <div className="styled-select"
                                    onClick={this.expandForm}
                                >
                                    <h2>Other</h2>
                                    <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
                                </div> 
                                <div 
                                    name="other"
                                    onChange={(e)=>{
                                        this.props.setOtherFilter(e.target.value)
                                    }}
                                    className="filters__input"
                                >
                                    <div className="filter"><input type="radio" name="other" id="aggregate" value="aggregate"/><label htmlFor="aggregate">Aggregate</label></div>
                                    <div className="filter"><input type="radio" name="other" id="multiple" value="multiple"/><label htmlFor="multiple">Multiple</label></div>
                                </div>
                            </div>
                            <button type="reset" 
                                className="reset__button"
                                onClick={()=> {
                                    this.props.clearFilter()
                                    this.clearRadios();

                                }
                            }>Clear</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCommonFilter: (commonName) => dispatch(setCommonFilter(commonName)),
    setLatinFilter: (latinName) => dispatch(setLatinFilter(latinName)),
    setTypeFilter: (type) => dispatch(setTypeFilter(type)),
    setVenationFilter: (venation) => dispatch(setVenationFilter(venation)),
    setArrangementFilter: (arrangement) => dispatch(setArrangementFilter(arrangement)),
    setLobingFilter: (lobing) => dispatch(setLobingFilter(lobing)),
    setTextureFilter: (texture) => dispatch(setTextureFilter(texture)),
    setShapeFilter: (shape) => dispatch(setShapeFilter(shape)),
    setDryFilter: (dryFruits) => dispatch(setDryFilter(dryFruits)),
    setFleshyFilter: (fleshyFruits) => dispatch(setFleshyFilter(fleshyFruits)),
    setOtherFilter: (other) => dispatch(setOtherFilter(other)),
    setMarginsFilter: (margins) => dispatch(setMarginsFilter(margins)),
    clearFilter: () => dispatch(clearFilter())
});

export default connect(undefined, mapDispatchToProps)(TreeFilters);