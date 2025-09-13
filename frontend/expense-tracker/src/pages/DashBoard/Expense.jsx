import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import IncomeOverview from "../../components/Income/IncomeOverview";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import Modal from "../../components/layouts/Modal";
import AddIncomeForm from "../../components/Income/AddIncomeForm";
import toast from "react-hot-toast";
import IncomeList from "../../components/Income/IncomeList";
import DeleteAlert from "../../components/layouts/DeleteAlert";
import { useUserAuth } from "../../hooks/useUserAuth";
const Expense = () => {
    useUserAuth();
    
    const [expenseData, setExpenseData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        id: null,
    });
    const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);

    // Get All Income Details
    const fetchExpenseDetails = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const response = await axiosInstance.get(API_PATHS.EXPENSE.GET_ALL_EXPENSE);

            if (response.data) {
                setExpenseData(response.data);
            }
        } catch (error) {
            console.log("Something went wrong. Please try again.", error);
        } finally {
            setLoading(false);
        }
    };


    // Handle Add Income
    const handleAddExpense = async (expense) => {
        const { category, amount, date, icon } = expense;

        // ✅ Validation Checks
        if (!source.trim()) {
            toast.error("Source is required.");
            return;
        }

        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            toast.error("Amount should be a valid number greater than 0.");
            return;
        }

        if (!date) {
            toast.error("Date is required.");
            return;
        }

        try {
            await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
                category,
                amount,
                date,
                icon,
            });

            toast.success("Expense added successfully!");

            // Refresh expense list
            fetchExpenseDetails();
            setOpenAddIncomeModal(false);
        } catch (error) {
            console.error("Error adding Expense:", error);
            toast.error("Something went wrong while adding income.");
        }
    };


    // Delete Income
    const deleteExpense = async (id) => {
        try{
        await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));
        setOpenDeleteAlert({show:false, data:null});
        toast.success("Expense details deleted Successfully");
        fetchExpenseDetails();
        }catch(error){
          console.error("Error deleting Expense:",error);
          error.response?.data?.message || error.message
        }
     };

    // Handle Download Income Details
    const handleDownloadIncomeDetails = async () => { };

    useEffect(() => {
        fetchExpenseDetails();

        return () => { }
    }, []);

    return (
        <DashboardLayout activeMenu="Expense">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <div className="">
                        <IncomeOverview
                            transactions={expenseData}
                            onAddIncome={() => setOpenAddExpenseModal(true)}
                        />
                    </div>

                    <IncomeList 
                    transactions={expenseData}
                    onDelete ={(id)=>{
                        setOpenDeleteAlert({show:true , data:id})
                    }}
                    onDownload={handleDownloadIncomeDetails}
                    />
                </div>

                <Modal
                    isOpen={openAddExpenseModal}
                    onClose={() => setOpenAddExpenseModal(false)}
                    title="Add Expense"
                >
                    <AddIncomeForm onAddIncome={handleAddExpense} />
                </Modal>

                <Modal 
                isOpen={openDeleteAlert.show}
                onClose={()=>setOpenDeleteAlert({show:false,data:null})}
                title="Delete Expense"
                >
                  <DeleteAlert
                  content="Are you sure you want to delete this income"
                  onDelete={()=>deleteExpense(openDeleteAlert.data)}
                  />
                </Modal>
            </div>
        </DashboardLayout>
    );
};

export default Expense;
