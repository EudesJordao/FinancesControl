package com.finances.finances.activity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finances.finances.activity.model.Finance;

public interface FinanceRepository extends JpaRepository<Finance, Long>{} 
