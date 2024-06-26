package com.finances.finances.activity.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finances.finances.activity.model.Finance;
import com.finances.finances.activity.service.FinanceService;

@RestController
@RequestMapping("/api")
public class FinanceController {
    
    @Autowired
    private FinanceService financeService;

    @GetMapping("/balances")
    public double getCurrentBalance() {
        return financeService.getCurrentBalance();
    }  

    @GetMapping("/finances")
    public List<Finance> getAllFinances(){
        return financeService.getAllFinances();
    }

    @PostMapping("/finances")
    public Finance saveFinance( @RequestBody Finance finance){
        LocalDate date = LocalDate.parse(finance.getData(), DateTimeFormatter.ISO_LOCAL_DATE);
        finance.setData(date.toString());
        return financeService.saveFinance(finance);
    }

}
