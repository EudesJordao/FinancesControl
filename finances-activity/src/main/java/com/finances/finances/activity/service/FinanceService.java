package com.finances.finances.activity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.finances.finances.activity.model.Finance;
import com.finances.finances.activity.repository.FinanceRepository;

@Service
@Transactional
public class FinanceService {
    

    @Autowired
    private FinanceRepository financeRepository;
 
    public double getCurrentBalance(){
        List<Finance> finances = financeRepository.findAll();
        double balance = 0;

        for(Finance finance : finances){
            if("deposit".equals(finance.getType())){
                balance += finance.getAmount();
            } else if("activity".equals(finance.getType())){
                balance -= finance.getAmount();
            }
        }

        return balance;
    }

    public List<Finance> getAllFinances() {
        return financeRepository.findAll();
    }

    public Finance saveFinance(Finance finance) {
        return financeRepository.save(finance);
    }
}
