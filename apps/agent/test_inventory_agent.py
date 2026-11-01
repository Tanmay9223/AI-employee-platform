import pytest
import sys
import os

# Append the current directory (apps/agent) to sys.path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from inventory_agent import filter_actionable, AgentState

def test_filter_actionable_mixed_risks():
    state = {
        'depletion_forecasts': [
            {'sku': 'SKU1', 'risk_level': 'CRITICAL'},
            {'sku': 'SKU2', 'risk_level': 'HIGH'},
            {'sku': 'SKU3', 'risk_level': 'MEDIUM'},
            {'sku': 'SKU4', 'risk_level': 'LOW'}
        ],
        'nodes_executed': []
    }

    new_state = filter_actionable(state)

    assert len(new_state['actionable_risks']) == 2
    assert new_state['actionable_risks'][0]['sku'] == 'SKU1'
    assert new_state['actionable_risks'][1]['sku'] == 'SKU2'
    assert len(new_state['nodes_executed']) == 1
    assert new_state['nodes_executed'][0]['node'] == 'filter_actionable'
    assert new_state['nodes_executed'][0]['filtered_to'] == 2

def test_filter_actionable_empty_list():
    state = {
        'depletion_forecasts': [],
        'nodes_executed': []
    }

    new_state = filter_actionable(state)

    assert len(new_state['actionable_risks']) == 0
    assert len(new_state['nodes_executed']) == 1
    assert new_state['nodes_executed'][0]['filtered_to'] == 0

def test_filter_actionable_all_low_medium():
    state = {
        'depletion_forecasts': [
            {'sku': 'SKU1', 'risk_level': 'MEDIUM'},
            {'sku': 'SKU2', 'risk_level': 'LOW'},
            {'sku': 'SKU3', 'risk_level': 'MEDIUM'}
        ],
        'nodes_executed': []
    }

    new_state = filter_actionable(state)

    assert len(new_state['actionable_risks']) == 0
    assert len(new_state['nodes_executed']) == 1
    assert new_state['nodes_executed'][0]['filtered_to'] == 0

def test_filter_actionable_all_critical_high():
    state = {
        'depletion_forecasts': [
            {'sku': 'SKU1', 'risk_level': 'CRITICAL'},
            {'sku': 'SKU2', 'risk_level': 'HIGH'},
            {'sku': 'SKU3', 'risk_level': 'CRITICAL'}
        ],
        'nodes_executed': []
    }

    new_state = filter_actionable(state)

    assert len(new_state['actionable_risks']) == 3
    assert new_state['actionable_risks'][0]['sku'] == 'SKU1'
    assert new_state['actionable_risks'][1]['sku'] == 'SKU2'
    assert new_state['actionable_risks'][2]['sku'] == 'SKU3'
    assert len(new_state['nodes_executed']) == 1
    assert new_state['nodes_executed'][0]['filtered_to'] == 3
