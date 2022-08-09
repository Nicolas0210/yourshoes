import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import NavBar2 from "../../Navbar2/Navbar2"
import { TextTable } from "./StyledDataTable";
import { getAllShoes } from "../../../redux/actions";
import NavBar from "../../NavBar/NavBar";



export default function DatatableProducts() {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    // console.log('products', products)
    
    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch(getAllShoes())
    },[])

    

    const paginateFunction = (pagee) => {
        pagee -= 1
        setPage(pagee)
        
    };

    // const handleDelete = () => {
    //     axios.put(`/pet/${id}`).then((r) => console.log(r.data))
    //     console.log(id)
    // }

    return (
        <div >
            <NavBar2/>
            <TableContainer component={Paper} className='table' >
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell" ><TextTable>ID</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Nombre</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Precio</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Modelo</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Imagen</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>sold</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>IsActive</TextTable></TableCell>
                            <TableCell className="tableCell"><TextTable>Brand</TextTable></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.length && products.slice(0, 50).map((p, index) => (
                            <TableRow key={index}>
                                <TableCell className="tableCell"><TextTable>{p.id}</TextTable></TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <TextTable>{p.title}</TextTable>
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell"><TextTable>{p.price}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{p.model}</TextTable></TableCell>
                                <TableCell className="tableCell"><img src={p.image} alt="product" width="50" /></TableCell>
                                <TableCell className="tableCell"><TextTable>{p.sold}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{p.isActive ? 'true' : 'false'}</TextTable></TableCell>
                                <TableCell className="tableCell"><TextTable>{p.brand ? p.brand.name : 'Sin marca'}</TextTable></TableCell>
                                {/* <TableCell>
                                    <DivButtons>
                                        <ButtonEdit to={`/admin/profilepets/${p.id}`}>Editar</ButtonEdit>
                                        <ButtonDelete onClick={() => axios.put(`/pet/${p.id}`).then((r) => console.log(r.data))}>
                                            Eliminar
                                        </ButtonDelete>
                                    </DivButtons>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
               
            </TableContainer>
            

        </div>
    )
}



